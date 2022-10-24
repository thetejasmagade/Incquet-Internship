<template>
    <section style="padding-top: 150px;" class="products container">
        <div v-if="!products" class="d-flex justify-content-center pt-5">
            <Loading class="pt-5" />
        </div>
        <div v-else class="row">
            <div class="col-md-4" v-for="(product, i) in products" :key="i">
                <div class="card mb-4 shadow-sm">
                    <img :src="product.image" class="bd-placeholder-img card-img-top" width="100%" height="225">
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">{{product.description}}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-success">$
                                    {{product.price}}</button>
                            </div>
                            <small class="text-danger">{{product.type}}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import Loading from "@/components/Loading.vue"

export default {
    data() {
        return {
            products: "",
        }
    },
    components: {
        Loading
    },
    methods: {
        getProducts: function () {
            axios.get('https://61922b19aeab5c0017105dfb.mockapi.io/product').then(resp => {
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