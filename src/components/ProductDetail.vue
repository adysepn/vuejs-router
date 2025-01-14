<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const loaded = ref(false);
const error = ref(false);
const product = ref(null);
const route = useRoute();

watchEffect(() => {
    if (route.params.id) {
        fetch(`/api/products/${route.params.id}.json`)
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
    <template v-if="route.params.id">
        <h1>Product Detail</h1>
        <div v-if="loaded">
            <template v-if="product">
                <h1>{{ product.id }}-{{ product.name }}</h1>
                <h2>{{ product.description }}</h2>
                <h2>Price: Rp {{ product.price }}</h2>
            </template>
        </div>
        <div v-else-if="error">
            <h1>Error loading product: {{ $route.params.id }}</h1>
        </div>
        <div v-else>
            <h1>Loading product: {{ $route.params.id }}</h1>
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