<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <h3>Halaman dengan path: {{ route.path }}</h3>
    <h1>PAGE NOT FOUND</h1>
</template>

<style scoped>
    
</style>