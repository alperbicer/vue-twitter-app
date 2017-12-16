<template>
  <div>
    <div class="row">
      <div class="columns" v-if="profile">
        <div class="column is-two-thirds">
          <app-profile :image="profile.photoURL" :name="profile.name" :username="profile.username"></app-profile>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="columns" v-if="tweet.user" v-for="tweet in tweets" v-bind:key="tweet.id">
        <div class="column is-11">
          <app-tweet :tweet="tweet"></app-tweet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Me, Api } from '../services'
  import Tweet from '../components/Tweet.vue'
  import Profile from '../components/Profile.vue'
  export default {
    components: {
      'app-tweet': Tweet,
      'app-profile': Profile
    },
    data: () => ({
      profile: {
        name: '',
        username: '',
        photoURL: ''
      },
      tweets: {
        user: {
          profile_image_url: '',
          name: ''
        },
        text: ''
      }
    }),
    methods: {
      getUser () {
        return Me.get().then(data => {
          this.profile = data
          return data
        })
      },
      getTimeline (data) {
        Api.getTimeline(data.credential).then(tweets => {
          this.tweets = tweets
        })
      }
    },
    created () {
      this.getUser().then(data => {
        this.getTimeline(data)
      })
    }
  }
</script>
