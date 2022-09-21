<template>
  <div class="popupBackdrop">
    <div class="mainPopupContainer">
      <div class="popupHeaderContainer">
        <div class="deleteHeaderTextContainer">
          <slot name="headerText">DELETE COURSE</slot>
        </div>
        <div class="headerButtonContainer">
          <button>
            <i class="fa-solid fa-circle-xmark" @click="close"></i>
          </button>
        </div>
      </div>
      <div class="popupBodyContainer">
        <slot name="body">
          <div class="slotDefaultBodyContent">
            Are you really sure you want to delete {{ deleteCourseName }}?
          </div>
          <div class="slotDefaultBodyContent">
            This action cannot be undone.
          </div>
        </slot>
        <div class="buttonContainer">
          <button class="backButton">
            <i class="fa-solid fa-arrow-left" @click="close"></i>BACK
          </button>
          <button class="deleteButton">
            <i
              class="fa-solid fa-trash-can"
              @click="deleteData(deleteCourseName)"
            >
            </i
            >DELETE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoursesDataService from "../services/CoursesDataService.js";
export default {
  name: "DeletePopUpBody",
  props: ["deleteCourseName"],
  methods: {
    close() {
      this.$emit("close");
    },
    deleteData(courseName) {
      CoursesDataService.delete(courseName);

      alert(courseName + " successfully deleted!");
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
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.slotDefaultBodyContent {
  width: 60vw;
  height: 2vh;
  margin-top: 2vh;
  text-align: center;
  font-size: 1.5vw;
}

.popupBackdrop {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.mainPopupContainer {
  background-color: var(--light-gray);
  box-shadow: 2px 2px 60px 6px gray;
  border-radius: 3vw;
}

.popupHeaderContainer {
  background-color: var(--light-gray);
  border-radius: 3vw 3vw 0 0;
  display: flex;
  flex-flow: row;
}

.deleteHeaderTextContainer {
  align-items: center;
  background-color: var(--light-red);
  color: white;
  border-radius: 3vw 0 3vw 0;
  display: flex;
  font-size: 2vw;
  font-weight: 500;
  flex-flow: column-wrap;
  justify-content: center;
  width: 50%;
  padding: 1vw 0;
  letter-spacing: 0.3vw;
}

.headerButtonContainer {
  align-items: center;
  display: flex;
  flex-flow: column-wrap;
  justify-content: right;
  padding: 1vw 2vw 0 0;
  width: 50%;
}

.headerButtonContainer button {
  border: none;
  color: var(--light-blue);
  font-size: 3vw;
  text-decoration: none;
}

.headerButtonContainer button:hover {
  color: var(--dark-blue);
  cursor: pointer;
}

.popupBodyContainer {
  color: var(--dark-blue);
  padding: 1vw;
}
.buttonContainer {
  align-items: center;
  display: flex;
  column-gap: 2vw;
  flex-flow: row;
  text-align: center;
  justify-content: center;
  padding: 3vw 0;
}
.backButton {
  align-items: center;
  background-color: white;
  color: var(--dark-blue);
  column-gap: 1vw;
  display: flex;
  flex-flow: row;
  font-size: 1.5vw;
  font-weight: 900;
  border-radius: 20vw;
  padding: 1vw 2vw;
  border: none;
}
.deleteButton {
  align-items: center;
  background-color: white;
  color: var(--light-red);
  column-gap: 1vw;
  display: flex;
  flex-flow: row;
  font-size: 1.5vw;
  font-weight: 900;
  border-radius: 20vw;
  padding: 1vw 2vw;
  border: none;
}

.backButton:hover {
  background-color: var(--dark-blue);
  color: white;
  cursor: pointer;
}
.deleteButton:hover {
  background-color: var(--light-red);
  color: white;
  cursor: pointer;
}
</style>
