<template>
    <div style="padding-top: 150px;" class="container px-4 px-lg-5 my-2">
        <div v-if="!product" class="d-flex justify-content-center pt-5">
            <Loading class="pt-5" />
        </div>
        <div v-else class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0"
                    :src="product.image" alt="..."></div>
            <div class="col-md-6">
                <div class="small mb-1 text-danger">{{product.type}}</div>
                <h1 class="display-6 fw-bolder">{{product.name}}</h1>
                <div class="fs-5 mb-5">
                    <span class="text-decoration-line-through">$ {{parseInt(product.price) + 25 + ".00"}}</span>&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-success">$ {{product.price}}</button>
                </div>
                <p>{{product.description}}</p>
                <div class="d-flex">
                    <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                        style="max-width: 3rem">
                    <button class="btn btn-outline-dark flex-shrink-0" type="button">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        <router-link :to="{name: 'productlisting'}"><button type="button" class="btn btn-danger mt-4">Go Back</button></router-link>
    </div>
</template>

<script>
import axios from "axios"
import Loading from "@/components/Loading.vue"

export default {
    name: "ProductView",
    data() {
        return {
            product: ""
        }
    },
    components: {
        Loading
    },
    methods: {
        getProducts: function () {
            axios.get(`https://61922b19aeab5c0017105dfb.mockapi.io/product/${this.$route.params.id}`).then(resp => {
                this.product = resp.data;
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