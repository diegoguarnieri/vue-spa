<template>
    <div>
        <h1>About</h1>
    </div>

</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        login: function() {

        },
        getData: function() {
            this.axios({
                method: 'get',
                url: 'http://172.16.4.160:9040/sanctum/csrf-cookie'
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
