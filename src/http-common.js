import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3003/course-t3/course",
  headers: {
    "Content-type": "application/json",
  },
});
