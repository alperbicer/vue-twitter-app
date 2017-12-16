<template>
  <div class="content">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control has-text-centered">
            <button v-on:click="signIn()" class="button is-primary">
            Login with Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { User } from '../services'

  export default {
    beforeRouteEnter (to, from, next) {
      const cancel = firebase.auth().onAuthStateChanged((user) => {
        cancel()
        if (user) {
          next(to.query.redirect || '/feed')
          return
        }
        next()
      })
    },
    methods: {
      signIn: function (type) {
        firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
          .then((result) => {
            User.create(result.user, result.credential, result.additionalUserInfo)
              .then(() => {
                this.$router.push('/feed')
              })
          })
      }
    }
  }
</script>
