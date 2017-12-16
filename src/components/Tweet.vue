<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="tweet.user.profile_image_url" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ tweet.user.name }}</p>
          <p class="subtitle is-6">@{{ tweet.user.screen_name }}</p>
        </div>
      </div>

      <div class="content">
        {{ tweet.text }}
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <div class="card-image" v-if="tweet.extended_entities && tweet.extended_entities.media">
      <figure class="image is-2by1">
        <img :src="tweet.extended_entities.media[0].media_url_https" alt="Placeholder image">
      </figure>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tweet']
  }
</script>
