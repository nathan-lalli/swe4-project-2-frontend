<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <PopUpModal v-show="isPopupVisible" @close="closePopup" >
        <template v-slot:body>
          <EditPopUpBody/>
        </template>
      </PopUpModal>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import PopUpModal from "./components/PopUpModal.vue";
import EditPopUpBody from "./components/EditPopUpBody.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
    PopUpModal,
    EditPopUpBody
},
  data() {
    return {
      isPopupVisible: true,
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
