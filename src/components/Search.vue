<template>
    <form class="d-flex" role="search">
        <input v-model="searchData" class="form-control me-4" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="button" @click="search">Search</button>
    </form>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            searchData: "",
        }
    },
    methods: {
        search() {
            this.$router.push({
                name: 'searchlisting',
                params: { searchQuery: this.searchData }
            })
        },
    },

}
</script>

<style>

</style>