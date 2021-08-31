<template>
    <div class="about">
        <h1>This is a post page</h1>
        <h2>id: {{ $route.params.id }}</h2>
        <input v-model="pageName">
        <button @click="btnClick()">button</button>
    </div>
</template>

<script>
export default {
    watch: {
        //$route(to, from) {
        $route(to) {
            this.getData(to.params)
        }
    },
    data() {
        return {
            pageName: ''
        }
    },
    mounted() {
        this.getData(this.$route.params)
    },
    methods: {
        btnClick: function() {
            this.$emit('events', 'loadPage', this.pageName);
        },
        getData: function(params) {
            console.log('post', params)
        }
    }
}
</script>
