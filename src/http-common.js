import axios from "axios";
export default axios.create({
  baseURL: "project2.eaglesoftwareteam.com",
  headers: {
    "Content-type": "application/json",
  },
});
