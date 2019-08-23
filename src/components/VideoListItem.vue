<template>
  <li class="list-group-item media">
    <img :src="thumbnailURL" alt="photo" class="mr-3" />
    <div class="media-body">{{video.snippet.title}}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  // we are using array of strings for props
  props: ["video"],

  computed: {
    // format data before we use that inside of the template
    thumbnailURL() {
      return this.video.snippet.thumbnails.default.url;
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
</style>