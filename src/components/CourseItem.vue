<template>
  <div class="mainCourseItemContainer withDropdownClosed">
    <div class="courseEditButton">
      <!-- TODO: Add @click="editCourse(course)" -->
      <button>
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
    <div class="courseItemContainer">
      <div class="courseItemHeader">
        <div class="courseNumberContainer">
          {{ courseDept }}-{{ courseNumber }}
        </div>
        <div class="courseNameContainer">Object Oriented Programming</div>
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
                {{ courseSemesters.join(", ") }}
              </div>
            </div>
            <div v-if="courseLab" class="courseInformationItem labItem">
              <i class="fa-solid fa-flask"></i>
              <div class="courseInformationItemValue labValue">LAB</div>
            </div>
            <div class="courseInformationItem prereqItem">
              <i class="fa-solid fa-circle-exclamation"></i>
              <!-- TODO: Prereqs more than one? -->
              <div class="courseInformationItemValue prereqValue">
                {{ coursePrereqs.join(", ") }}
              </div>
            </div>
          </div>
          <div class="courseItemDescriptionDropdownButton">
            <button @click="toggleDropwdown()">
              <i class="dropdownIcon fa-solid fa-caret-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="courseDeleteButton">
      <!-- TODO: Add @click="deleteCourse(course)" -->
      <button>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    <div class="courseItemDescriptionDropdown">{{ courseDescription }}</div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  mounted() {
    this.$refs.listLocation;
  },
  data() {
    return {
      listLocation: 0,
      courseDept: "CMSC",
      courseNumber: "2133",
      courseName: "Object Oriented Programming",
      courseHours: "3",
      courseSemesters: ["FALL", "SPRING"],
      courseLab: true,
      coursePrereqs: ["CMSC-1133"],
      courseDescription:
        "Covers object oriented design and implementation issues. Topics include an introduction to modeling tools (e.g, UML), abstraction, inheritance, polymorphism, memory management, and common design patterns. The course also provides an introduction to event handling and GUI development using relevant class libraries.",
      isCourseDropdownOpen: false,
    };
  },
  props: {},
  methods: {
    toggleDropwdown() {
      var courseListing =
        document.querySelector(".courseList").childNodes[this.listLocation];
      if (this.isCourseDropdownOpen === false) {
        courseListing.querySelector(
          ".courseItemDescriptionDropdown"
        ).style.display = "flex";
        courseListing.querySelector(".courseDeleteButton").style.display =
          "flex";
        courseListing.querySelector(".dropdownIcon").className =
          "dropdownIcon fa-solid fa-caret-up";
        courseListing.querySelector(".courseItemHeader").style.borderRadius =
          "2.2vw 2.2vw 0 0";
        courseListing.classList.replace(
          "withDropdownClosed",
          "withDropdownOpen"
        );
        this.isCourseDropdownOpen = true;
      } else {
        courseListing.querySelector(
          ".courseItemDescriptionDropdown"
        ).style.display = "none";
        courseListing.querySelector(".courseDeleteButton").style.display =
          "none";
        courseListing.querySelector(".dropdownIcon").className =
          "dropdownIcon fa-solid fa-caret-down";
        courseListing.querySelector(".courseItemHeader").style.borderRadius =
          "2.2vw";
        courseListing.classList.replace(
          "withDropdownOpen",
          "withDropdownClosed"
        );
        this.isCourseDropdownOpen = false;
      }
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
    "delete description";
}

.withDropdownClosed {
  grid-template-rows: 1fr;
  grid-template-areas: "edit header";
}

.courseEditButton {
  align-items: center;
  display: flex;
  flex-flow: row;
  grid-area: edit;
  justify-content: center;
}

.courseEditButton button {
  background-color: transparent;
  border: none;
  color: var(--dark-blue);
  display: flex;
  flex-flow: column;
  font-size: 2vw;
}

.courseEditButton button :hover {
  background-color: transparent;
  border: none;
  color: var(--light-blue);
  cursor: pointer;
}

.courseDeleteButton {
  display: none;
  flex-flow: row;
  grid-area: delete;
  justify-content: center;
}

.courseDeleteButton button {
  background-color: white;
  border: none;
  color: var(--dark-blue);
  font-size: 2vw;
}

.courseDeleteButton button :hover {
  background-color: white;
  border: none;
  color: var(--light-red);
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
  background-color: var(--light-gray);
  border-radius: 50vw;
  color: var(--dark-blue);
  font-size: 2vw;
  font-weight: 900;
  letter-spacing: 0.05vw;
  padding: 1vh 1.5vw;
}

.courseNameContainer {
  background-color: var(--dark-blue);
  border-radius: 0 0 0 2.25vw;
  color: white;
  font-size: 2vw;
  font-weight: 100;
  padding: 1vh 2vw;
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
  justify-content: space-around;
}

.courseInformationItem {
  align-items: center;
  display: flex;
  flex-flow: row;
  font-weight: 900;
  font-size: 1.5vw;
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
