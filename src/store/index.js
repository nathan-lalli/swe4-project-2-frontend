import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courseResponse: {
      responseVal: [],
      responseIndex: 0,
    },
  },
  getters: {
    courseDept: (state, getters) => {
      var full =
        state.courseResponse.responseVal[
          getters.responseIndex
        ].coursenumber.split("-");
      return full[0];
    },
    courseNumber: (state, getters) => {
      var full =
        state.courseResponse.responseVal[
          getters.responseIndex
        ].coursenumber.split("-");
      return full[1];
    },
    courseName: (state, getters) => {
      return state.courseResponse.responseVal[getters.responseIndex].name;
    },
    courseHours: (state, getters) => {
      return state.courseResponse.responseVal[getters.responseIndex].hours;
    },
    courseSemesters: (state, getters) => {
      return state.courseResponse.responseVal[
        getters.responseIndex
      ].semester.toUpperCase();
    },
    courseLab: (state, getters) => {
      return state.courseResponse.responseVal[getters.responseIndex].lab;
    },
    courseHasPrereqs: (state, getters) => {
      return state.courseResponse.responseVal[getters.responseIndex]
        .prerequisite;
    },
    coursePrereqs: (state, getters) => {
      return state.courseResponse.responseVal[getters.responseIndex]
        .prerequisitecourse;
    },
    courseDesc: (state, getters) => {
      return state.courseResponse.responseVal[getters.responseIndex]
        .description;
    },
    responseLength: (state) => {
      return state.courseResponse.responseVal.length;
    },
    responseIndex: (state) => {
      return state.courseResponse.responseIndex;
    },
    responseVal: (state) => {
      return state.courseResponse.responseVal;
    },
  },
  mutations: {
    newSearch(state, response) {
      state.courseResponse.responseVal = response.response;
    },
    setResponseIndex(state, index) {
      state.courseResponse.responseIndex = index.index;
    },
  },
  actions: {},
});
