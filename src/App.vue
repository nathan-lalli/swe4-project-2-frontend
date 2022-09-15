<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <PaginationVue
        class="paginationVue"
        :totalPages="totalNumPages"
        :perPage="25"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
      <div class="courseList"></div>
      <PaginationVue
        class="paginationVue"
        :totalPages="totalNumPages"
        :perPage="25"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
    </div>

    <PopUpModal v-show="isPopupVisible" @close="closePopup" />
    <CourseItem style="display: none"></CourseItem>
  </div>
</template>

<script>
import Vue from "vue";
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import PopUpModal from "./components/PopUpModal.vue";
import PaginationVue from "./components/PaginationVue.vue";
import CourseItem from "./components/CourseItem.vue";
import CoursesDataService from "./services/CoursesDataService.js";

export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
    PopUpModal,
    PaginationVue,
    CourseItem,
  },
  data() {
    return {
      isPopupVisible: false,
      currentPage: 1,
      responseLength: 0,
      hold: [],
      totalNumPages: 0,
    };
  },
  created() {},
  mounted() {
    this.generateInitialCourseList();
    this.responseLength = this.$store.getters.responseLength;
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
      document.querySelector(".courseList").innerHTML = "";
      this.changePageCourseList(page);
    },
    async generateInitialCourseList() {
      this.hold = await CoursesDataService.getAll();
      this.totalNumPages = this.hold.data.totalPages;
      this.$store.commit({
        type: "newSearch",
        response: this.hold.data.Courses,
      });
      this.responseLength = this.$store.getters.responseLength;
      for (var i = 0; i < this.responseLength; i++) {
        this.$store.commit({ type: "setResponseIndex", index: i });
        var courseItemComp = Vue.extend(CourseItem);
        const courseItem = new courseItemComp({ parent: this });
        courseItem.setListLocation(i);
        courseItem.$mount();
        document.querySelector(".courseList").appendChild(courseItem.$el);
      }
    },
    async changePageCourseList(page) {
      this.hold = await CoursesDataService.getPage(page - 1);
      this.$store.commit({
        type: "newSearch",
        response: this.hold.data.Courses,
      });
      this.responseLength = this.$store.getters.responseLength;
      for (var i = 0; i < this.responseLength; i++) {
        this.$store.commit({ type: "setResponseIndex", index: i });
        var courseItemComp = Vue.extend(CourseItem);
        const courseItem = new courseItemComp({ parent: this });
        courseItem.setListLocation(i);
        courseItem.$mount();
        document.querySelector(".courseList").appendChild(courseItem.$el);
      }
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
.paginationVue {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
