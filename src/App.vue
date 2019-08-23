
<template>
  <div>
    <!-- listen for events coming from child (SearchBar) -->
    <!-- if termChange is triggered run onTermChange -->
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";

const API_KEY = "AIzaSyDk1jmFPY0NSOmkXPvTcBnDkNyDqjx1lTQ";

export default {
  // this object contains properties which customize this vue component &  how it behaves
  name: "App",
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
      console.log(response);
      // .then(response => console.log(response));
    }
  },

  // here we are specifyig the components we are using here
  components: {
    SearchBar
  }
};
</script>