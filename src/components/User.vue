<script setup>

</script>

<template>
    <h1>User</h1>
    <RouterView name="header" />
    <RouterView v-slot="{Component}">
        <component :is="Component" :request-id="$route.query.requestId"></component>
    </RouterView>
    <RouterView name="footer" />
</template>

<style scoped>
    .router-link-exact-active {
        color: red;
        font-weight: bold;
    }
</style>