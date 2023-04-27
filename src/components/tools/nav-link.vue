<template>
    <div class="main-menu d-none d-md-block">
        <nav class="">
            <ul id="navigation">

                <li>
                    <router-link class="text-info" :to="{ name: 'home' }" v-if="auth">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link class="text-info" :to="{ name: 'login' }" v-if="!auth">
                        Login
                    </router-link>
                    <router-link class="text-danger" :to="{ name: 'login' }" v-else @click="logout">
                        Logout
                    </router-link>
                </li>
                <li><a href="categories.html">Category</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="latest_news.html">Latest News</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li>
                    <a href="details.html">Pages</a>
                    <ul class="submenu">
                        <li><a href="elements.html">Element</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single-blog.html">Blog Details</a></li>
                        <li><a href="details.html">Categories Details</a></li>
                    </ul>
                </li>



            </ul>
        </nav>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
    name: 'nav-link',
    computed: {
        ...mapGetters({
            auth: 'auth/auth'
        })
    },



    methods: {
        logout() {
            this.$store.dispatch('auth/removeToken'),
                this.$router.push({ name: 'login' })
        }
    }
}
</script>

