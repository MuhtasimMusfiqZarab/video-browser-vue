// this is the first file needed to the initial boot (entry point)

import Vue from "vue";
import App from "./App";

// create vue instance
new Vue({
  //   el: "#app", // similar to $mount("#app")
  // here h is abbriviation of createElement function(we can write createElement instead of h)
  // App component is turned into vue instance, which turns into HTML (use this HTML on the application screen)
  render: h => h(App) // tell the instance what we wanna see on the screen(DOM)
}).$mount("#app");
