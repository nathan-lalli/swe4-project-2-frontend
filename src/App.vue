<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <PopUpModal v-show="isPopupVisible" @close="closePopup">
        <template v-slot:body>
          <DeletePopUpBody
            :deleteCourseName="getCourseName()"
            v-show="isPopupVisible"
            @close="closePopup"
          />
        </template>
      </PopUpModal>
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
    <CourseItem style="display: none"></CourseItem>
  </div>
</template>

<script>
import Vue from "vue";
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import PopUpModal from "./components/PopUpModal.vue";
import DeletePopUpBody from "./components/DeletePopUpBody.vue";
import PaginationVue from "./components/PaginationVue.vue";
import CourseItem from "./components/CourseItem.vue";
import CoursesDataService from "./services/CoursesDataService.js";
export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
    PopUpModal,
    DeletePopUpBody,
    PaginationVue,
    CourseItem,
  },
  data() {
    return {
      isPopupVisible: false,
      currentPage: 1,
      responseLength: 0,
      hold: [],
      deleteCourseNameVal: "",
      totalNumPages: 0,
      currentPhrase: "",
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
      this.currentPage = page;
      document.querySelector(".courseList").innerHTML = "";
      this.changePageCourseList(page);
    },
    async generateInitialCourseList() {
      document.querySelector(".courseList").innerHTML = "";
      this.hold = await CoursesDataService.getAll();
      this.currentPage = 1;
      this.totalNumPages = this.hold.data.totalPages;
      this.currentPhrase = "";
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
      if (this.currentPhrase === "") {
        this.hold = await CoursesDataService.getPage(page - 1);
      } else {
        this.hold = this.hold = await CoursesDataService.searchEverything(
          this.currentPhrase + "?page=" + (page - 1)
        );
      }
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
    async generateSearchedCourseList(searchedPhrase) {
      document.querySelector(".courseList").innerHTML = "";
      this.hold = await CoursesDataService.searchEverything(searchedPhrase);
      this.currentPhrase = searchedPhrase;
      this.totalNumPages = this.hold.data.totalPages;
      this.currentPage = 1;
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
    changeDeleteCourse: function (courseName) {
      this.deleteCourseNameVal = courseName;
    },
    getCourseName: function () {
      return this.deleteCourseNameVal;
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
