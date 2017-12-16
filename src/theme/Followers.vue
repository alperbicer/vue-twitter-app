<template>
  <div>
    <div class="row">
      <span>Mesaj Göndermek İstediğiniz Takipçinizi Seçin</span>
      <br><br>
      <app-direct-message v-if="showModal" @close="showModal = false" :follower="follower"></app-direct-message>
      <div class="columns" v-if="followers" v-for="follower in followers" v-bind:key="follower.id">
        <div class="column is-two-thirds" v-on:click="sayHello(follower)">
          <app-profile :image="follower.profile_image_url_https" :name="follower.name" :username="follower.screen_name"></app-profile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Me, Api } from '../services'
  import Profile from '../components/Profile.vue'
  import DirectMessage from '../components/DirectMessage.vue'
  export default {
    components: {
      'app-profile': Profile,
      'app-direct-message': DirectMessage
    },
    data: () => ({
      showModal: false,
      to: '',
      profile: {
        name: '',
        email: '',
        photoURL: ''
      },
      followers: {},
      follower: ''
    }),
    methods: {
      getUser () {
        return Me.get().then(data => {
          this.profile = data
          return data
        })
      },
      getFollowers (data) {
        Api.getFollowers(data.credential).then(followers => {
          this.followers = followers
        })
      },
      sayHello (follower) {
        this.showModal = true
        this.follower = follower
      }
    },
    created () {
      this.getUser().then(data => {
        this.getFollowers(data)
      })
    }
  }
</script>
