<template>
    <div>
        <h1>About</h1>
    </div>

    <button class="btn btn-primary" @click="csrf()">CSRF</button>
    <br/>

    <button class="btn btn-primary mt-3" @click="login()">Login</button>
    <br/>

    <button class="btn btn-success mt-3" @click="getSessionKey()">Get Session Key</button>
    <br/>

    <button class="btn btn-danger mt-3" @click="logout()">Logout</button>

    <p class="mt-4">Session: {{ sessionKey }}</p>

    <p class="mt-4">UUID: {{ uuid }}</p>

</template>

<script>
import { util } from '../mixins/util'

export default {
    mixins: [util],
    emits: ['events'],
    data() {
        return {
            sessionKey: '',
            uuid: ''
        }
    },
    mounted() {
        this.getSessionKey()
    },
    methods: {
        getSessionKey: function() {
            this.sessionKey = ''
            this.uuid = ''

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
