<template>
  <ul>
    VideoList
    {{videos.length}}
  </ul>
</template>

<script>
export default {
  name: "VideoList",
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