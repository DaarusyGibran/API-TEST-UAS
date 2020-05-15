<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#">mealdb api</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/search" class="nav-link">Search</router-link>
          </li>
            <li class="nav-item">
            <router-link to="/favorit" class="nav-link">Favorite</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/kategori" class="nav-link">Category</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ingredient" class="nav-link">Ingredient</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/area" class="nav-link">Area</router-link>
          </li>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="user.loggedIn == true">
        <b-nav-item>Hello {{user.data.displayName}}!</b-nav-item>
        <b-button pill variant="primary" @click.prevent="signOut">Sign out</b-button>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-else>
          <b-button pill variant="success" to="/login">Sign in</b-button>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import Footer from './components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: 'user'
    })
  },
  methods: {
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'Login'
          })
        })
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #507396;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: rgb(86, 175, 171);
}
.row-navbar {
    width: 100%;
    background-color: rgb(86, 175, 171);
}
.navbar {
    background-color: #35495E;
    padding: 15px;
}
</style>
