<template>
  <div class="mainCourseItemContainer withDropdownClosed">
    <div class="courseButtonsContainer">
      <div class="courseButtonsContainerDropdown">
        <!-- TODO: Add @click="editCourse(course)" -->
        <button
          class="editButton"
          @click="editCourse(courseDept + '-' + courseNumber)"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <div class="courseButtonsContainerDropdownContent">
          <button
            class="deleteButton"
            @click="deleteCourse(courseDept + '-' + courseNumber)"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="courseItemContainer">
      <div class="courseItemHeader">
        <div class="courseNumberContainer">
          {{ courseDept }}-{{ courseNumber }}
        </div>
        <div class="courseNameContainer courseNameContainerOnClosed">
          {{ courseName }}
        </div>
        <div class="courseInformationContainer">
          <div class="courseInformationItems">
            <div class="courseInformationItem hoursItem">
              <i class="fa-solid fa-clock"></i>
              <div class="courseInformationItemValue hoursValue">
                {{ courseHours }}
              </div>
            </div>
            <div class="courseInformationItem semesterItem">
              <i class="fa-solid fa-calendar"></i>
              <div class="courseInformationItemValue semesterValue">
                {{ courseSemesters }}
              </div>
            </div>
            <div v-if="courseLab" class="courseInformationItem labItem">
              <i class="fa-solid fa-flask"></i>
              <div class="courseInformationItemValue labValue">LAB</div>
            </div>
            <div
              v-if="courseHasPrereqs"
              class="courseInformationItem prereqItem"
            >
              <i class="fa-solid fa-circle-exclamation"></i>
              <!-- TODO: Prereqs more than one? -->
              <div class="courseInformationItemValue prereqValue">
                {{
                  coursePrereqs.length > 9
                    ? coursePrereqs.substr(0, 15) + "..."
                    : coursePrereqs
                }}
              </div>
            </div>
          </div>
          <div
            class="courseItemDescriptionDropdownButton"
            v-if="showDropdownButton"
          >
            <button @click="toggleDropwdown()">
              <i class="dropdownIcon fa-solid fa-caret-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="courseItemDescriptionDropdown">{{ courseDescription }}</div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  data() {
    return {
      listLocation: 0,
      courseDept: "",
      courseNumber: 1111,
      courseName: "",
      courseHours: 3,
      courseSemesters: [],
      courseLab: true,
      courseHasPrereqs: true,
      coursePrereqs: "",
      courseDescription: "",
      isCourseDropdownOpen: false,
      showDropdownButton: true,
    };
  },
  mounted() {
    console.log(this.$store.getters.courseDesc);
    this.courseDept = this.$store.getters.courseDept;
    this.courseNumber = this.$store.getters.courseNumber;
    this.courseName = this.$store.getters.courseName;
    this.courseHours = this.$store.getters.courseHours;
    this.courseSemesters = this.$store.getters.courseSemesters;
    this.courseLab = this.$store.getters.courseLab;
    this.courseHasPrereqs = this.$store.getters.courseHasPrereqs;
    this.coursePrereqs = this.$store.getters.coursePrereqs.substr(
      14,
      this.$store.getters.coursePrereqs.length
    );
    this.courseDescription = this.$store.getters.courseDesc;
    this.courseDescription.length > 0 || this.courseName.length >= 30
      ? (this.showDropdownButton = true)
      : (this.showDropdownButton = false);
  },
  methods: {
    toggleDropwdown() {
      var courseListing =
        document.querySelector(".courseList").childNodes[this.listLocation];
      if (this.isCourseDropdownOpen === false) {
        if (!(this.courseDescription.length === 0)) {
          courseListing.querySelector(
            ".courseItemDescriptionDropdown"
          ).style.display = "flex";
          courseListing.querySelector(".courseItemHeader").style.borderRadius =
            "2.2vw 2.2vw 0 0";
          courseListing.classList.replace(
            "withDropdownClosed",
            "withDropdownOpen"
          );
        }
        courseListing.querySelector(".dropdownIcon").className =
          "dropdownIcon fa-solid fa-caret-up";
        courseListing
          .querySelector(".courseNameContainer")
          .classList.remove("courseNameContainerOnClosed");
        this.isCourseDropdownOpen = true;
      } else {
        courseListing.querySelector(
          ".courseItemDescriptionDropdown"
        ).style.display = "none";
        courseListing.querySelector(".dropdownIcon").className =
          "dropdownIcon fa-solid fa-caret-down";
        courseListing.querySelector(".courseItemHeader").style.borderRadius =
          "2.2vw";
        courseListing.classList.replace(
          "withDropdownOpen",
          "withDropdownClosed"
        );
        courseListing
          .querySelector(".courseNameContainer")
          .classList.add("courseNameContainerOnClosed");
        this.isCourseDropdownOpen = false;
      }
    },
    deleteCourse: function (courseName) {
      this.$parent.changeDeleteCourse(courseName);
      this.$parent.showDeletePopup();
    },
    setListLocation(location) {
      this.listLocation = location;
    },
    editCourse: function (courseName) {
      this.$parent.changeEditCourse(courseName);
      this.$parent.showEditPopup();
    },
  },
};
</script>

<style>
.mainCourseItemContainer {
  display: grid;
  grid-template-columns: 5fr 95fr;
  grid-row-gap: 0;
}

.courseItemContainer {
  display: flex;
  flex-flow: column;
}

.withDropdownOpen {
  grid-template-rows: auto auto;
  grid-template-areas:
    "edit header"
    ". description";
}

.withDropdownClosed {
  grid-template-rows: 1fr;
  grid-template-areas: "edit header";
}

.courseButtonsContainer {
  align-items: center;
  display: flex;
  flex-flow: row;
  grid-area: edit;
  justify-content: center;
}
.courseButtonsContainerDropdown {
  align-items: center;
  display: flex;
  flex-flow: column;
  border-radius: 10vw;
  justify-content: center;
  padding: 1vh 0;
  position: absolute;
  row-gap: 1vw;
  z-index: 1;
}

.courseButtonsContainerDropdownContent {
  border-radius: 0 0 10vw 10vw;
  display: none;
  padding: 0 1vw;
}

.courseButtonsContainerDropdownContent .deleteButton {
  border: none;
  color: var(--dark-blue);
  font-size: 2vw;
}

.courseButtonsContainerDropdownContent .deleteButton :hover {
  border: none;
  color: var(--light-red);
  cursor: pointer;
}

.courseButtonsContainerDropdown:hover .courseButtonsContainerDropdownContent {
  background-color: var(--light-gray);
  display: block;
}

.courseButtonsContainerDropdown:hover .courseButtonsContainer {
  background-color: var(--light-gray);
}

.courseButtonsContainerDropdown:hover {
  background-color: var(--light-gray);
}

.courseButtonsContainer .editButton {
  background-color: transparent;
  border: none;
  color: var(--dark-blue);
  display: flex;
  flex-flow: column;
  font-size: 2vw;
}

.courseButtonsContainer .editButton :hover {
  background-color: transparent;
  border: none;
  color: var(--light-green);
  cursor: pointer;
}

.courseItemDescriptionDropdown {
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 0 0 2.5vw 2.5vw;
  display: none;
  grid-area: description;
  padding: 1vh 2vw;
}

.courseItemHeader {
  background-color: var(--light-gray);
  border-radius: 2.5vw;
  display: flex;
  flex-flow: row;
  grid-area: header;
  overflow: auto;
}

.courseNumberContainer {
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 50vw;
  color: var(--dark-blue);
  display: flex;
  font-size: 2vw;
  font-weight: 900;
  justify-content: center;
  letter-spacing: 0.05vw;
  min-width: 13vw;
  max-width: 13vw;
  padding: 1vh 1.5vw;
}

.courseNameContainer {
  background-color: var(--dark-blue);
  border-radius: 0 0 0 2.25vw;
  color: white;
  font-size: 2vw;
  font-weight: 100;
  min-width: 30vw;
  max-width: 30vw;
  padding: 1vh 1.5vw;
}

.courseNameContainerOnClosed {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.courseInformationContainer {
  background-color: var(--light-blue);
  color: var(--dark-blue);
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  justify-content: space-between;
  padding: 1vh 1.5vw;
}

.courseInformationItems {
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  column-gap: 3vw;
  justify-content: left;
}

.courseInformationItem {
  align-items: center;
  display: flex;
  flex-flow: row;
  font-weight: 900;
  font-size: 1.5vw;
}

.hoursItem {
  min-width: 3vw;
}

.semesterItem {
  max-width: 10vw;
}

.labItem {
  min-width: 3vw;
}

.courseInformationItemValue {
  align-items: center;
  display: flex;
  flex-flow: row;
}

.courseInformationItem i {
  vertical-align: middle;
  padding: 0 0.3vw 0 0;
}

.prereqItem i {
  color: var(--darker-red);
}

.courseItemDescriptionDropdownButton {
  align-items: center;
  display: flex;
  flex-flow: row;
}

.courseItemDescriptionDropdownButton button {
  background-color: var(--light-blue);
  border: none;
  color: white;
  font-weight: 900;
  font-size: 2vw;
}

.courseItemDescriptionDropdownButton button :hover {
  color: var(--dark-blue);
  cursor: pointer;
}
</style>
