<script setup>

</script>

<template>
    <h1>User</h1>
    <ul>
        <li><router-link :to="{name:'user-profile'}">Profile</router-link></li>
        <li><router-link :to="{name:'user-order'}">Order</router-link></li>
        <li><router-link :to="{name:'user-wishlist'}">Wishlist</router-link></li>
    </ul>
    <router-view/>
    <div>
        <h1>Ini Footer</h1>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: red;
        font-weight: bold;
    }
</style>