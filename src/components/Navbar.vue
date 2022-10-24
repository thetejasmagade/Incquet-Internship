<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link to="/" class="navbar-brand">Tejas Magade</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link">Products</router-link>
                    </li>
                </ul>
                <Search />
            </div>
        </div>
    </nav>
</template>

<script>
import Search from './Search.vue';

export default {
    name: "Navbar",
    components: { Search }
}
</script>

<style>

</style>