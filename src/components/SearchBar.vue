<template>
  <div>
    <!-- for input event we run onInput function -->
    <!-- @ === v-on: -->
    <input type="text" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  // method is for changing the data inside of the application
  methods: {
    // we have functions inside of this
    onInput(event) {
      // emiting event to communicate with parent
      this.$emit("termChange", event.target.value); //1st arg: name of the event to emit ,2nd: info about the event
    }
  }
};
</script>

<style scoped>
</style>