<template>
  <li>{{video.snippet.title}}</li>
</template>

<script>
export default {
  name: "VideoListItem",
  // we are using array of strings for props
  props: ["video"]
};
</script>