<template>
  <div class="mainSearchBarContainer">
    <div class="searchBarContainer">
      <input
        class="searchBarElement"
        ref="searchQueryValue"
        type="text"
        v-model="searchQuery"
        placeholder="ex. 'CMSC-2133' or 'Object Oriented Programming'"
        v-on:keyup.enter="searchSubmission()"
      />
      <button @click="searchSubmission()">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div class="searchButtonsContainer">
      <button>
        <i class="fa-solid fa-circle-plus"></i>
      </button>
      <button>
        <i class="fa-solid fa-filter"></i>
      </button>
    </div>
  </div>
</template>

<script>
//import { CourseDataService } from "../service/CourseDataService.js";
export default {
  name: "SearchBar",
  props: {},
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    searchSubmission() {
      var searchQueryValue = this.$refs.searchQueryValue.value;
      if (searchQueryValue != "") {
        this.searchQuery = searchQueryValue;
        this.$parent.generateSearchedCourseList(this.searchQuery);
      } else {
        alert("Please enter a search query!");
      }
    },
  },
};
</script>

<style>
.mainSearchBarContainer {
  display: grid;
  grid-template-columns: 10fr 1fr;
  column-gap: 2vw;
  padding: 2vw 0;
}

.searchBarContainer {
  display: grid;
  grid-template-columns: 1fr 0.05fr;
}

.searchBarContainer button {
  background-color: var(--light-blue);
  border: none;
  border-radius: 0 10vw 10vw 0;
  color: white;
  font-size: 1.25vw;
  font-weight: 900;
  width: 100%;
}

.searchBarContainer button:hover {
  background-color: var(--light-gray);
  color: var(--dark-blue);
  cursor: pointer;
}

.searchBarElement {
  background-color: var(--light-blue);
  border: none;
  border-radius: 10vw 0 0 10vw;
  box-sizing: border-box;
  color: var(--dark-blue);
  font-size: 1.5vw;
  height: 100%;
  letter-spacing: 0.1vw;
  padding: 0 0 0 2vw;
  width: 100%;
}

.searchBarElement:focus {
  background-color: var(--dark-blue);
  color: white;
  outline: none;
}

::placeholder {
  color: var(--light-gray);
  opacity: 1;
}

.searchButtonsContainer {
  align-items: center;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.searchButtonsContainer button {
  background-color: white;
  border: none;
  color: var(--light-blue);
  font-size: 3vw;
  text-decoration: none;
}

.searchButtonsContainer button:hover {
  color: var(--dark-blue);
  cursor: pointer;
}
</style>
