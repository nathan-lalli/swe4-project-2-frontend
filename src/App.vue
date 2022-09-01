<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <div class="courseListTemp"></div>
    </div>
    <PopUpModal v-show="isPopupVisible" @close="closePopup" />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import PopUpModal from "./components/PopUpModal.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
    PopUpModal,
  },
  data() {
    return {
      isPopupVisible: false,
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
.pageContentContainer {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>
