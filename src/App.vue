<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <div class="courseList"></div>
    </div>
    <PopUpModal v-show="isPopupVisible" @close="closePopup" >
      <template v-slot:headerText>Edit Course</template>
      <template v-slot:body><EditPopUpBody></EditPopUpBody></template>
    </PopUpModal>
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
  padding: 0 2vw;
}
.courseList {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2vh;
}
</style>