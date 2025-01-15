<script setup>
const {requestId} = defineProps(['requestId']);
console.log('requestId', requestId);

</script>

<template>
    <RouterView name="header" />
    <h1>User Profile {{ requestId }}</h1>
    <RouterView name="footer"/>
</template>

<style scoped>
    
</style>