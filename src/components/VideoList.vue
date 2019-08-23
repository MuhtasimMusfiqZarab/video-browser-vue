<template>
  <ul class="list-group">
    <!-- need to provide the key property in the element of which we are making the list of (iteration) -->
    <!-- key is used whenever out list is updated (update our list in a performant fasion) -->
    <VideoListItem v-for="singleVideo in videos" :video="singleVideo" :key="singleVideo.etag" />
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  //tell component what data it should except from its parent (array of property names expecting to receive from the parent )
  // we can use obeject to validate the prop type also
  //    we can write--- props: ["videos"] or
  props: {
    videos: Array
  }
};
</script>

<style scoped>
</style>