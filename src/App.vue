<template>
  <div id="app">
    <NavBar />
    <div class="pageContentContainer">
      <SearchBar />
      <div class="courseListTemp"></div>
      <PopUpModal v-show="isPopupVisible" @close="closePopup">
        <template v-slot:body>
          <DeletePopUpBody
            :deleteCourseName="getCourseName()"
            v-show="isPopupVisible"
            @close="closePopup"
          />
        </template>
      </PopUpModal>
      <div class="courseList"></div>
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
import CourseItem from "./components/CourseItem.vue";
import CoursesDataService from "./services/CoursesDataService.js";
export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
    PopUpModal,
    DeletePopUpBody,
    CourseItem,
  },
  data() {
    return {
      isPopupVisible: false,
      responseLength: 0,
      hold: [],
      deleteCourseNameVal: "",
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
    async generateInitialCourseList() {
      this.hold = await CoursesDataService.getAll();
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
      console.log(courseName + "Change Delete Course");
      this.deleteCourseNameVal = courseName;
    },
    getCourseName: function () {
      console.log(this.deleteCourseNameVal + "Get Course Name");
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
</style>
