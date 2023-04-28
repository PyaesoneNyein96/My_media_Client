<template>
  <app-Header />

  <router-view v-if="!load" />
  <app-Loader v-else />

  <app-Footer />
</template>


<script>

import axios from "axios";
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapGetters({
      load: 'auth/getLoader'
    }),

    current() {
      return this.$route.name
    },



  },
  methods: {
    re_login() {

      this.$store.dispatch('auth/setLoading', true)
      let x = localStorage.getItem('auth');

      if (x != 'false') {
        axios.post('http://localhost:8000/api/user/re_login', { 'email': x })
          .then(res => {
            this.$store.dispatch('auth/setUserInfo', [res.data.token, res.data])
            this.$router.push({ name: 'home' })
            this.$store.dispatch('auth/setLoading', false)
          })
          .catch(err => console.log(err))
      }


    }
  },

  beforeMount() {
    this.re_login();
  },

}


</script>


<style scoped></style>