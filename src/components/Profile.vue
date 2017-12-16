<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="image" alt="" class="ui circular image a-medium">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ name }}</strong>
            <br>
            <small>@{{ username }}</small>
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>
<script>
  export default {
    props: ['image', 'name', 'username']
  }
</script>
