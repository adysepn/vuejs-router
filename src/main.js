import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import NotFound from './components/NotFound.vue'
import ProductSearch from './components/ProductSearch.vue'
import User from './components/User.vue'
import UserProfile from './components/UserProfile.vue'
import UserWishlist from './components/UserWishlist.vue'
import UserOrder from './components/UserOrder.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About,
            sensitive: true // untuk mengaktifkan case sensitive
        },
        {
            path: '/products/search',
            component: ProductSearch,
            name: 'product-search'
        },
        {
            // Tanda + untuk route satu atau lebih, cont: /files/1, /files/image/contoh
            path: '/products/:id(\\d+)?', // Penggunaan regex (\\d) agar param yg dimasukkan hanya bertipe number
            component: ProductDetail,     // Tanda ? agar param menjadi optional(dapat dikosongkan)
        },
        {
            path: '/users',
            component: User,
            children: [
                {
                    path: '',
                    component: UserProfile,
                    name: 'user' // Menggunakan name agar saat path berubah, tidak perlu mengubah lagi route path yg sudah dibuat di component
                },
                {
                    path: 'profile',
                    component: UserProfile,
                    name: 'user-profile'
                },
                {
                    path: 'wishlist',
                    component: UserWishlist,
                    name: 'user-wishlist'
                },
                {
                    path: 'order',
                    component: UserOrder,
                    name: 'user-order'
                }
            ]
        },
        {
            // tanda * untuk route nol atau lebih, cont: /files/, /files/1, /files/image/contoh
            path: '/:notFound*',
            component: NotFound
        }
    ],
    history: createWebHistory(),
})

createApp(App).use(router).mount('#app')
