<template>
    <div>
        <h1>About</h1>
    </div>

    <button @click="test()">test</button>

</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
    data() {
        return {
            endpoint: 'https://api.guarnieri.ca'            
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        test: function() {
            axios({
                method: 'get',
                url: this.endpoint + '/api/test'
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

            axios({
                method: 'post',
                url: this.endpoint + '/api/login',
                data: data
            })
            .then(response => {
                console.log(response)
                this.test()
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                
            })
        },
        getData: function() {
            axios({
                method: 'get',
                url: this.endpoint + '/sanctum/csrf-cookie'
            })
            .then(response => {
                console.log(response)
                this.login()
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
