
<template>
  <div>
    <!-- listen for events coming from child (SearchBar) -->
    <!-- if termChange is triggered run onTermChange -->
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";

export default {
  // this object contains properties which customize this vue component &  how it behaves
  name: "App",
  methods: {
    onTermChange(searchTerm) {
      //value of 1st arg of this is 2nd org of the emited event function from child
      console.log(searchTerm);
    }
  },

  // here we are specifyig the components we are using here
  components: {
    SearchBar
  }
};
</script>