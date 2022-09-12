<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <div class="courseListTemp"></div>
    </div>
    <PopUpModal v-show="isPopupVisible" @close="closePopup" />
    <pagination
      :totalPages="10"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import PopUpModal from "./components/PopUpModal.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
    PopUpModal,
    Pagination,
  },
  data() {
    return {
      isPopupVisible: false,
      currentPage: 1,
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
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
