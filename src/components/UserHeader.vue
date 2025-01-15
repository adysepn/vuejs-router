<script setup>

</script>

<template>
    <div>
        <ul>
            <li><router-link :to="{name:'user-profile'}">Profile</router-link></li>
            <li><router-link :to="{name:'user-order'}">Order</router-link></li>
            <li><router-link :to="{name:'user-wishlist'}">Wishlist</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
    
</style>