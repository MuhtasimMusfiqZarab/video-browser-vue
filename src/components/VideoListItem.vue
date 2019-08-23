<template>
  <!-- adding click event handler -->
  <li class="list-group-item media" @click="onVideoSelect">
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
  },
  methods: {
    onVideoSelect() {
      // triggering(emit) the event here //passing video with the event
      this.$emit("videoSelect", this.video);
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