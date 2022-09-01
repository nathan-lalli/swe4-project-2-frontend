<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <PopUpModal v-show="isPopupVisible" @close="closePopup">
        <template v-slot:body> </template>
      </PopUpModal>
    </div>
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

<style></style>
