<template>
  <ul class="col-md-4">
    <!-- need to provide the key property in the element of which we are making the list of (iteration) -->
    <!-- key is used whenever out list is updated (update our list in a performant fasion) -->
    <!-- listening videoSelect event from child(videoListItem) -->
    <VideoListItem
      v-for="singleVideo in videos"
      :video="singleVideo"
      :key="singleVideo.etag"
      @videoSelect="onVideoSelect"
    />
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
  },
  methods: {
    // getting the video from the emmited child event 2nd parameter
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    }
  }
};
</script>

<style scoped>
</style>