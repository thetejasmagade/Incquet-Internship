<template>
    <div class="carddiv container">
        <div v-if="!this.$store.state.isLoggedIn">
            <h3 class="text-center">🔐 Login Form 🔐</h3><br />
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" v-if="isValidationEnabled" v-model="email"
                        @keyup.stop.prevent="checkEmailValidation" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <input type="text" v-else v-model="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <p class="text-danger" v-if="!isEmailValid">Please Enter valid email address</p>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" v-model="password" v-if="isValidationEnabled"
                        @keyup.stop.prevent="checkPasswordValidation" class="form-control" id="exampleInputPassword1">
                    <input type="password" v-model="password" v-else class="form-control" id="exampleInputPassword1">
                    <p class="text-danger">{{ passValidatorInfo }}</p>
                </div>

                <div class="form-check pb-2">
                    <input class="form-check-input"
                        @click="isValidationEnabled = !isValidationEnabled && passValidatorInfo == ''" type="checkbox"
                        value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        <span v-if="isValidationEnabled">Email and Password Validation <span
                                class="text-success">Enabled</span></span>
                        <span v-else>Email and Password Validation <span class="text-danger">Disabled</span></span>
                    </label>
                </div>

                <button v-if="isValidationEnabled" @click="checkAuth" type="button"
                    v-bind:class="(isEmailValid && isPasswordValid && !passValidatorInfo) ? 'btn-warning' : 'disabled'"
                    class="btn px-4">Submit</button>
                <button v-else @click="checkAuth" type="button" class="btn btn-warning px-4">Submit</button>
                <button type="button" @click="resetForm" class="btn btn-danger px-4 mx-3">Reset</button>

                <div v-html="LoginFailure"></div>
            </form>
        </div>
        <div v-else class="text-center">
            <h3>
                🥳 You are Logged in already 🥳 Press below Button to see Products
            </h3>
            <router-link :to="{ name: 'productlisting' }"><button type="button" class="btn btn-warning mt-4">See Products</button></router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "LoginCard",
    data() {
        return {
            email: "",
            isEmailValid: true,
            password: "",
            isPasswordValid: false,
            passValidatorInfo: "",
            isValidationEnabled: false,
            LoginFailure: ""
        }
    },
    methods: {
        checkEmailValidation: function () {
            this.isEmailValid = false;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (this.email.match(mailformat)) {
                this.isEmailValid = true;
            }
        },
        checkPasswordValidation: function () {
            var isPasswordValid = false;
            this.passValidatorInfo = ""
            var lowerCaseLetters = /[a-z]/g;
            if (this.password.match(lowerCaseLetters)) {
                isPasswordValid = true;
            } else {
                isPasswordValid = false;
                this.passValidatorInfo = "Password must contain one Lower Case letters"
            }

            var upperCaseLetters = /[A-Z]/g;
            if (this.password.match(upperCaseLetters)) {
                isPasswordValid = true;
            } else {
                isPasswordValid = false;
                this.passValidatorInfo = "Password must contain one Upper Case letters"
            }

            var numbers = /[0-9]/g;
            if (this.password.match(numbers)) {
                isPasswordValid = true;
            } else {
                isPasswordValid = false;
                this.passValidatorInfo = "Password must contain atleast One Number"
            }

            if (this.password.length < 8) {
                isPasswordValid = false
                this.passValidatorInfo = "Password must have atleast 8 characters"
            } else {
                isPasswordValid = true;
            }

            this.isPasswordValid = isPasswordValid
        },

        resetForm: function () {
            this.isEmailValid = true;
            this.isPasswordValid = false;
            this.password = "";
            this.email = "";
            this.passValidatorInfo = "";
        },

        checkAuth() {
            axios.post("http://restapi.adequateshop.com/api/authaccount/login", {
                email: this.email,
                password: this.password
            }).then((resp) => {
                if (resp.data.code == 0) {
                    this.$store.commit('changeLoginFunc')
                    this.$router.push('/products')
                } else {
                    this.LoginFailure = `<div class="mt-3 alert alert-danger" role="alert">${resp.data.message}</div>`
                    setTimeout(() => this.LoginFailure = ``, 2000);
                }
            });
        }
    }
}
</script>

<style>
.carddiv {
    padding-top: 150px;
    width: 40%;
}

@media only screen and (max-width: 600px) {
    .carddiv {
        width: 100%
    }
}
</style>