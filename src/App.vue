
<template>
  <div>
    <!-- listen for events coming from child (SearchBar) -->
    <!-- if termChange is triggered run onTermChange -->
    <SearchBar @termChange="onTermChange" />
    <!-- add v-bind directive to send data from parent to child -->
    <!-- v-bind means if videos property is updated inside of perent, re-render, pass the new list to the child -->
    <!-- v-bind means :  -->
    <VideoList :videos="videos" />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const API_KEY = "AIzaSyDk1jmFPY0NSOmkXPvTcBnDkNyDqjx1lTQ";

export default {
  // this object contains properties which customize this vue component &  how it behaves
  name: "App",
  // here we are specifyig the components we are using here
  components: {
    SearchBar,
    VideoList
  },
  // in vue component data property is a function which returns object ( every instance get a copy of the data, not sharing a single one)

  data() {
    // function returns data object
    return {
      videos: []
    };
  },

  methods: {
    async onTermChange(searchTerm) {
      //value of 1st arg of this is 2nd org of the emited event function from child
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        }
      );
      // saving response to video data
      this.videos = response.data.items;
    }
  }
};
</script>