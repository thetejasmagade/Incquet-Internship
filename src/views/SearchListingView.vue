<template>
    <div style="padding-top: 150px;" class="container">
        <div v-if="!products" class="d-flex justify-content-center pt-5">
            <Loading class="pt-5" />
        </div>
        <div v-else>
            <h6 class="float-end mb-5 border border-danger rounded p-2">Products Found: <span
                    class="text-danger font-weight-bold">{{products.length}}</span></h6>
            <br /><br /><br />
            <div v-if="products.length > 0">
                <div v-for="(product, i) in products" :key="i">
                    <div class="row container">
                        <div class="col-sm-4">
                            <img :src="product.image" class="img-thumbnail">
                        </div>
                        <div class="col-sm-8">
                            <h4 class="py-2"><router-link :to="{name: 'product', params: {id: product.id}}">{{ product.name }}</router-link></h4>
                            <p>{{ product.description }}</p>
                            <button type="button" class="btn btn-warning">$ {{ product.price}}</button><br /><br />
                            <button type="button" class="btn btn-outline-secondary btn-sm">{{ product.type }}</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <h2 v-else class="text-center">
                ⛔ Products Not Found ⛔
            </h2>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Loading from "@/components/Loading.vue"

export default {
    name: "SearchListingView",
    data() {
        return {
            products: ""
        }
    },
    components: {
        Loading
    },
    methods: {
        getProducts: function () {
            axios.get(`https://61922b19aeab5c0017105dfb.mockapi.io/product?name=${this.$route.params.searchQuery}`).then(resp => {
                this.products = resp.data;
            });
        }
    },

    mounted() {
        this.$nextTick(function () {
            this.getProducts();
        })
    }
}
</script>

<style>

</style>