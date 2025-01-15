<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const {id} = defineProps(['id']); // digunakan untuk mengambil route param karena pada pengaturan di main.js props nya true
const loaded = ref(false);
const error = ref(false);
const product = ref(null);
const route = useRoute(); // digunakan untuk mengambil parameter di URL Path, dengan cara: route.params.(nama param)

watchEffect(() => {
    if (id) { // bisa juga menggunakan route.params.id 
        fetch(`/api/products/${id}.json`)
        .then(res => res.json())
        .then(data => {
            product.value = data;
            loaded.value = true;
        })
        .catch(err => {
            console.error(`Error loading product: ${err}`);
            error.value = true;
        });
    }
})
</script>

<template>
    <template v-if="id">
        <h1>Product Detail</h1>
        <div v-if="loaded">
            <template v-if="product">
                <h1>{{ product.id }}-{{ product.name }}</h1>
                <h2>{{ product.description }}</h2>
                <h2>Price: Rp {{ product.price }}</h2>
            </template>
        </div>
        <div v-else-if="error">
            <h1>Error loading product: {{ id }}</h1>
        </div>
        <div v-else>
            <h1>Loading product: {{ id }}</h1>
        </div>
    </template>
    <template v-else>
        <div>
            <h1>No Product Selected</h1>
        </div>
    </template>
</template>

<style scoped>
    
</style>