<template>
  <nav class="navbar has-shadow">
    <div class="container">
        <router-link class="icon" to="/feed">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://vuejs.org/images/logo.png" alt="Vue SPA" />
            </figure>
          </div>
        </router-link>
        <router-link v-if="currentUser" class="navbar-item is-tab" to="/feed">Feed</router-link>
        <router-link v-if="currentUser" class="navbar-item is-tab" to="/followers">Followers</router-link>
        <div v-if="currentUser" @click="signOut" class="navbar-item is-tab">Sign Out</div>
        <router-link v-else class="navbar-item is-tab" to="/login">Login</router-link>
      </div>
    </nav>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      currentUser: null
    }),
    created () {
      firebase.auth().onAuthStateChanged((user) => {
        console.log('currentUser: ' + user)
        this.currentUser = user
      })
    },
    methods: {
      signOut () {
        firebase.auth().signOut()
        this.$router.push('/login')
      }
    }
  }
</script>
