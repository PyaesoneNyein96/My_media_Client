<template>
  <app-Header />


  <router-view />
  <app-Loader />
  <app-Footer />
</template>


<script>

import axios from "axios";

export default {
  name: 'App',


  computed: {
    current() {
      return this.$route.name
    }
  },
  methods: {
    re_login() {
      let x = localStorage.getItem('auth');
      if (x != 'false') {
        axios.post('http://localhost:8000/api/user/re_login', { 'email': x })
          .then(res => {
            this.$store.dispatch('auth/setUserInfo', [res.data.token, res.data])
            this.$router.push({ name: 'home' })
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