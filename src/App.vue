<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: sofia-pro, sans-serif;
}
</style>
