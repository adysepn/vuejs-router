<script setup>

const {title} = defineProps({
    title: String
})
</script>

<template>
    <h1>{{ title }}</h1>
    <p>Ini adalah halaman utama</p>
</template>

<style scoped>
    
</style>