// import { get } from "core-js/core/dict";
import http from "../http-common";
class CoursesDataService {
  getAll() {
    return http.get("/course-t3/course");
  }
  getPage(page) {
    return http.get(`/course-t3/course/?page=${page}`);
  }
  getNumber(id) {
    return http.get(`/course-t3/course/coursenumber/${id}`);
  }
  create(data) {
    return http.post("course-t3/course", data);
  }
  update(id, data) {
    return http.put(`/course-t3/course/coursenumber/${id}`, data);
  }
  delete(id) {
    return http.delete(`/course-t3/course/coursenumber/${id}`);
  }
  deleteAll() {
    return http.delete(`/course-t3/course`);
  }
  getAllLab() {
    return http.get("/course-t3/course/lab");
  }
  getName(name) {
    return http.get(`/course-t3/course/name/${name}`);
  }
  getDept(dept) {
    return http.get(`/course-t3/course/dept/${dept}`);
  }
  getLevel(level) {
    return http.get(`/course-t3/course/level/${level}`);
  }
  getHours(hours) {
    return http.get(`/course-t3/course/hours/${hours}`);
  }
  getDesc(desc) {
    return http.get(`/course-t3/course/description/${desc}`);
  }
  getSemester(semester) {
    return http.get(`/course-t3/course/semester/${semester}`);
  }
  findPreReq() {
    return http.get("/course-t3/course/prerequisite");
  }
  getPreReqCourse(course) {
    return http.get(`/course-t3/course/prerequisite/${course}`);
  }
}
export default new CoursesDataService();
