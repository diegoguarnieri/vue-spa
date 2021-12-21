<template>
    <div>
        <h1>About</h1>
    </div>

    <button class="btn btn-primary" @click="csrf()">CSRF</button>
    <br/>

    <button class="btn btn-primary mt-3" @click="login()">Login</button>
    <br/>

    <button class="btn btn-primary mt-3" @click="getSessionKey()">Get Session Key</button>
    <br/>

    <button class="btn btn-primary mt-3" @click="logout()">Logout</button>

    <p class="mt-4">Session: {{ sessionKey }}</p>

    <p class="mt-4">UUID: {{ uuid }}</p>

</template>

<script>
//import axios from 'axios'
//axios.defaults.withCredentials = true

export default {
    emits: ['events'],
    data() {
        return {
            endpoint: 'https://api.guarnieri.ca',
            sessionKey: '',
            uuid: ''
        }
    },
    mounted() {
        //this.getData()
    },
    methods: {
        getSessionKey: function() {
            this.axios({
                method: 'get',
                url: this.endpoint + '/api/session-key'
            })
            .then(response => {
                console.log(response)
                this.sessionKey = response.data.sessionKey
                this.uuid = response.data.uuid
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                
            })
        },
        logout: function() {
            this.axios({
                method: 'get',
                url: this.endpoint + '/api/logout'
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                
            })
        },
        login: function() {
            //axios.defaults.withCredentials = true

            let data = {
                email: 'diego@test.com',
                password: 'diego'
            }

            this.axios({
                method: 'post',
                url: this.endpoint + '/api/login',
                data: data
            })
            .then(response => {
                console.log(response)
                //this.test()
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                
            })
        },
        csrf: function() {
            this.axios({
                method: 'get',
                url: this.endpoint + '/sanctum/csrf-cookie'
            })
            .then(response => {
                console.log(response)
                //this.login()
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                
            })
        }
    }
}
</script>
