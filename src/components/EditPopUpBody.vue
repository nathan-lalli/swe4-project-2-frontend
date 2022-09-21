<template>
  <div class="mainEditPopupBodyContainer">
    <div class="courseNumberContainer">
      <p>Course #</p>
      <input
        class="courseNumberElement"
        id="courseNumberValue"
        type="text"
        :value="editCourseData.coursenumber"
      />
    </div>
    <div class="courseNameContainer">
      <p>Course Name</p>
      <input
        class="courseNameElement"
        id="courseNameValue"
        type="text"
        :value="editCourseData.name"
      />
    </div>
    <div class="multiSelectsContainer">
      <div class="courseHoursContainer">
        <div class="dropdown">
          <button class="courseHoursElement">
            <i class="fa-solid fa-clock"></i>
            {{ courseHours }} <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="dropdownContent">
            <a href="#" @click="setHours(1)">1</a>
            <a href="#" @click="setHours(2)">2</a>
            <a href="#" @click="setHours(3)">3</a>
            <a href="#" @click="setHours(4)">4</a>
          </div>
        </div>
      </div>
      <div class="semestersOfferedContainer">
        <div class="dropdown">
          <button class="semestersOfferedElement">
            {{
              editCourseData.semester != null
                ? editCourseData.semester
                : "Select Semester"
            }}
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="dropdownContent">
            <ul class="no-bullets">
              <li>
                <input
                  type="checkbox"
                  :checked="
                    editCourseData.semester === 'Spring' ||
                    editCourseData.semester === 'Every'
                  "
                />Spring
              </li>
              <li>
                <input
                  type="checkbox"
                  :checked="
                    editCourseData.semester === 'Summer' ||
                    editCourseData.semester === 'Every'
                  "
                />Summer
              </li>
              <li>
                <input
                  type="checkbox"
                  :checked="
                    editCourseData.semester === 'Fall' ||
                    editCourseData.semester === 'Every'
                  "
                />Fall
              </li>
              <li>
                <input
                  type="checkbox"
                  :checked="
                    editCourseData.semester === 'Winter' ||
                    editCourseData.semester === 'Every'
                  "
                />Winter
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="labContainer">
        <button class="labElement">
          <ul class="no-bullets">
            <li>
              <input
                class="labCheckbox"
                type="checkbox"
                :checked="editCourseData.lab"
              />Lab
            </li>
          </ul>
        </button>
      </div>
    </div>
    <div class="preReqContainer">
      <p>Prerequisites</p>
      <input
        class="preReqElement"
        ref="preReqValue"
        type="text"
        placeholder="i.e. 'CMSC-2113, CMSC-1113'"
        :value="editCourseData.prerequisitecourse"
      />
    </div>
    <div class="courseDescriptionContainer">
      <p>Course Description</p>
      <div class="courseDescriptionElement">
        <textarea
          class="courseDescriptionValue"
          placeholder="Enter course information here."
          :value="editCourseData.description"
        />
      </div>
    </div>
    <div class="saveButtonsContainer">
      <button @click="save()">
        <i class="fa-solid fa-floppy-disk"></i>SAVE
      </button>
    </div>
  </div>
</template>

<script>
import CoursesDataService from "../services/CoursesDataService.js";

export default {
  name: "EditPopUpBody",
  data() {
    return {
      courseDept: "",
      courseNumber: 1111,
      courseName: "",
      courseHours: 3,
      courseSemesters: "",
      courseLab: true,
      courseHasPrereqs: false,
      coursePrereqs: "",
      courseDescription: "",
    };
  },
  props: ["editCourseData"],
  methods: {
    close() {
      console.log(this.courseName + "Close");
      this.$emit("close");
    },
    setDept() {
      this.courseDept = document
        .getElementById("courseNumberValue")
        .value.split("-")[0];
    },
    getLevel() {
      return this.courseNumber.substr(0, 1);
    },
    setNumber() {
      this.courseNumber = document
        .getElementById("courseNumberValue")
        .value.split("-")[1];
    },
    setName() {
      this.courseName = document.getElementById("courseNameValue").value;
    },
    setHours(hour) {
      this.courseHours = hour;
    },
    setSemesters() {
      var semestersArray = [];
      var children = document.querySelector(".no-bullets").childNodes;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.childNodes[0].checked) {
          semestersArray.push(child.childNodes[1].data);
        }
      }

      if (semestersArray.length >= 2) {
        this.courseSemesters = "Every";
      } else {
        this.courseSemesters = semestersArray.join(", ");
      }
    },
    setLab() {
      this.courseLab = document.querySelector(".labCheckbox").checked;
    },
    setCoursePrereqs() {
      this.coursePrereqs = document.querySelector(".preReqElement").value;

      if (this.coursePrereqs != "") {
        this.courseHasPrereqs = true;
      } else {
        this.courseHasPrereqs = false;
      }
    },
    setDescription() {
      this.courseDesc = document.querySelector(".courseDescriptionValue").value;
    },
    save() {
      console.log("Saved");
      this.setDept();
      this.setNumber();
      this.setName();
      this.setSemesters();
      this.setLab();
      this.setCoursePrereqs();
      this.setDescription();

      console.log(this.courseDept);
      console.log(this.courseNumber);

      CoursesDataService.update(this.courseDept + "-" + this.courseNumber, {
        dept: this.courseDept,
        coursenumber: this.courseDept + "-" + this.courseNumber,
        level: this.getLevel(),
        hours: this.courseHours,
        name: this.courseName,
        description: this.courseDesc,
        prerequisite: this.courseHasPrereqs,
        lab: this.courseLab,
        semester: this.courseSemesters,
        prerequisitecourse: this.coursePrereqs,
      });

      alert(
        this.courseDept + "-" + this.courseNumber + " successfully edited!"
      );
      if (
        this.$parent.$parent.currentPhrase === "" ||
        this.$parent.$parent.currentPhrase == null
      ) {
        this.$parent.$parent.generateInitialCourseList();
      } else {
        this.$parent.$parent.generateSearchedCourseList(
          this.$parent.$parent.currentPhrase
        );
      }
    },
  },
};
</script>

<style scoped>
.mainEditPopupBodyContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.5fr 1fr 1.5fr 3fr 1fr;

  grid-template-areas:
    "courseNum courseName courseName"
    "multiSelect multiSelect multiSelect"
    "preReq preReq preReq"
    "courseDesc courseDesc courseDesc"
    ". save .";
  background-color: var(--light-gray);
  row-gap: 1vw;
  column-gap: 2vw;
  padding: 10px;
}

p {
  font-size: 1.75vw;
}

/* Course Number */
.courseNumberContainer {
  align-items: left;
  display: flex;
  flex-flow: column;
  grid-area: courseNum;
  justify-content: left;
  row-gap: 1vw;
}
.courseNumberElement {
  background-color: white;
  border: none;
  border-radius: 10vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  letter-spacing: 0.1vw;
  padding: 1vw 2vw;
}

/* Course Name */
.courseNameContainer {
  align-items: left;
  display: flex;
  flex-flow: column;
  grid-area: courseName;
  justify-content: left;
  row-gap: 1vw;
}
.courseNameElement {
  background-color: white;
  border: none;
  border-radius: 10vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  letter-spacing: 0.1vw;
  padding: 1vw 2vw;
  width: 100%;
}

.multiSelectsContainer {
  display: flex;
  column-gap: 2vw;
  flex-flow: row;
  grid-area: multiSelect;
}

/* Hours */
.courseHoursContainer {
  align-items: center;
  display: flex;
  flex-flow: column;
  grid-area: hours;
  justify-content: center;
  row-gap: 1vw;
}

.courseHoursElement {
  background-color: white;
  border: none;
  border-radius: 10vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  letter-spacing: 0.1vw;
  padding: 1vw 2vw;
  cursor: pointer;
}

/* Semesters Offered */
.semestersOfferedContainer {
  align-items: center;
  display: flex;
  flex-flow: column;
  grid-area: offered;
  justify-content: center;
  row-gap: 1vw;
}

.semestersOfferedElement {
  background-color: white;
  border: none;
  border-radius: 10vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  letter-spacing: 0.1vw;
  padding: 1vw 2vw;
  cursor: pointer;
}

/* Lab */
.labContainer {
  align-items: center;
  display: flex;
  flex-flow: column;
  grid-area: lab;
  justify-content: center;
  row-gap: 1vw;
}

.labElement {
  background-color: white;
  border: none;
  border-radius: 10vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  letter-spacing: 0.1vw;
  padding: 1vw 2vw;
  cursor: pointer;
}

/* Prerequisite */
.preReqContainer {
  align-items: left;
  display: flex;
  flex-flow: column;
  grid-area: preReq;
  justify-content: left;
  row-gap: 1vw;
}
.preReqElement {
  background-color: white;
  border: none;
  border-radius: 10vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  letter-spacing: 0.1vw;
  padding: 1vw 2vw;
}

/* Course Description */
.courseDescriptionContainer {
  align-items: left;
  display: flex;
  flex-flow: column;
  grid-area: courseDesc;
  height: 100%;
  justify-content: left;
  width: 100%;
  row-gap: 1vw;
}

.courseDescriptionElement {
  height: 100%;
}

.courseDescriptionContainer textarea {
  border: none;
  border-radius: 2vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  height: 100%;
  width: 100%;
  padding: 1vw 2vw 1vw 2vw;
}

/* Save Button */
.saveButtonsContainer {
  align-items: center;
  display: flex;
  flex-flow: column;
  grid-area: save;
  justify-content: center;
  row-gap: 1vw;
}
.saveButtonsContainer button {
  align-items: center;
  background-color: white;
  border: none;
  color: var(--light-green);
  column-gap: 1vw;
  display: flex;
  flex-flow: row;
  font-size: 2vw;
  font-weight: 900;
  text-decoration: none;
  border-radius: 10vw;
  padding: 1vw 2vw;
}
.saveButtonsContainer button:hover {
  background-color: var(--light-green);
  color: white;
  cursor: pointer;
}

/* Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdownContent {
  display: none;
  position: absolute;
  border-radius: 2vw;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1vw;
  z-index: 1;
}
.dropdownContent a {
  color: var(--dark-blue);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownContent a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdownContent {
  display: block;
}

/* Checkbox */
/* Customize the label (the container) */
.checkbox-container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}
/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--dark-blue);
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

ul.no-bullets {
  list-style-type: none;
  /* padding: 0 0 0 2vw; */
}
</style>
