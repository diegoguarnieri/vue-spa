<template>
    <div id="nav">
        <!--<router-link to="/">Home</router-link> |
        <router-link to="/post">Post</router-link> |
        <router-link to="/post/abc">Post</router-link> |
        <router-link to="/post/def">Post</router-link> |
        <router-link to="/about">About</router-link> | -->

        <a href="#" @click="toPage('/')">Home</a> |
        <a href="#" @click="toPage('/about')">About</a> |

        <a href="#" @click="toPage('/post')">Post</a> |
        <a href="#" @click="toPage('/post/abc')">Post param</a> |
        <a href="#" @click="toPage('/post/def')">Post param</a> |
        <a href="#" @click="toPage('/post/ejk')">Post param</a>
    </div>

    <router-view @events="handleEvents" />
</template>

<script>
export default {
    methods: {
        toPage: function(pageName) {
            this.$router.push(pageName)
        },
        handleEvents: function(type, pageName) {
            console.log(type, pageName)
            this.toPage(pageName)
        }
    }
}
</script>