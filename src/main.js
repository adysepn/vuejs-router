import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import NotFound from './components/NotFound.vue'
import ProductSearch from './components/ProductSearch.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            props: {
                title: 'Home Page'
            }
        },
        {
            path: '/about',
            component: About,
            sensitive: true // untuk mengaktifkan case sensitive
        },
        {
            path: '/products/search',
            component: ProductSearch,
            name: 'product-search',
            props: route => ({product: route.query.product || ''})
        },
        {
            path: '/products/search/:keyword', // apabila mengakses url ini maka akan ke redirect ke-
            redirect: to => {
                return {name: 'product-search', query: {product: to.params.keyword}} // -sini yaitu 'products/search?product='
            }        // product-search = '/products/search'
        },
        {
            // Tanda + untuk route satu atau lebih, cont: /files/1, /files/image/contoh
            path: '/products/:id(\\d+)?', // Penggunaan regex (\\d) agar param yg dimasukkan hanya bertipe number
            component: ProductDetail,     // Tanda ? agar param menjadi optional(dapat dikosongkan)
            sensitive: false,
            props: true // Untuk memberi tahu bahwa semua param route dimasukkan secara otomatis kedalan defineProps
        },              // asalkan nama param dan props nya sama
        {
            path: '/users',
            component: () => import ('./components/User.vue'), // untuk melakukan lazy loading (tidak diload sebelum mengakses /users)
            children: [
                {
                    path: '',
                    name: 'user', // Menggunakan name agar saat path berubah, tidak perlu mengubah lagi route path yg sudah dibuat di component
                    components: {
                        default: () => import ('./components/UserProfile.vue'),
                        header: () => import ('./components/UserHeader.vue'),
                        footer: () => import ('./components/UserFooter.vue')
                    }
                    
                },
                {
                    path: 'profile',
                    name: 'user-profile',
                    components: { // Menggunakan name sebagai param <RouterView/> 
                        default: () => import ('./components/UserProfile.vue'), // akan menggunakan default apabila tidak diberi param name
                        header: () => import ('./components/UserHeader.vue'), // header dan footer adalah value param name
                        footer: () => import ('./components/UserFooter.vue')
                    }
                },
                {
                    path: 'wishlist',
                    name: 'user-wishlist',
                    components: {
                        default: () => import ('./components/UserWishlist.vue'),
                        header: () => import ('./components/UserHeader.vue'),
                        footer: () => import ('./components/UserFooter.vue')
                    }
                },
                {
                    path: 'order',
                    name: 'user-order',
                    components: {
                        default: () => import ('./components/UserOrder.vue'),
                        header: () => import ('./components/UserHeader.vue'),
                        footer: () => import ('./components/UserFooter.vue')
                    }
                }
            ]
        },
        {
            // tanda * untuk route nol atau lebih, cont: /files/, /files/1, /files/image/contoh
            path: '/:notFound*',
            component: NotFound,
            beforeEnter: (to, from, next) => { // Navigation Guard / middleware yang digunakan per-route
                console.log(`NotFound ${to.fullPath}`);
                next();
            }
        }
    ],
    history: createWebHistory(),
})

createApp(App).use(router).mount('#app')

// Digunakan untuk menambahkan kode sebelum user berpindah halaman
// Contoh penggunaan: Autentikasi pengguna, Memvalidasi akses berdasarkan peran pengguna, Menampilkan loading spinner sebelum rute selesai diproses.
router.beforeEach((to, from, next) => {
    console.log(`before Navigation to ${to.fullPath} from ${from.fullPath}`);
    next();    
});

// Digunakan untuk menambahkan kode setelah user berpindah halaman
// Contoh penggunaan: Melacak halaman yang telah dikunjungi, Menghentikan loading spinner setelah navigasi selesai.
router.afterEach((to, from) => {
    console.log(`after Navigation to ${to.fullPath} from ${from.fullPath}`);
});