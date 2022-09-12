import { get } from "core-js/core/dict";
import http from "../http-common";
class CoursesDataService {
  getAll() {
    return http.get("/course-t3/course");
  }
  getNumber(id) {
    return http.get(`/course-t3/course/${id}`);
  }
  create(data) {
    return http.post("course-t3/course", data);
  }
  update(id, data) {
    return http.put(`/course-t3/course/${id}`, data);
  }
  delete(id) {
    return http.delete(`/course-t3/course/${id}`);
  }
  deleteAll() {
    return http.delete(`/course-t3/course`);
  }
  getAllLab() {
    return http.get("/course-t3/course/lab");
  }
  getName(name) {
    return http.get(`/course-t3/course/${name}`);
  }
  getDept(dept) {
    return http.get(`/course-t3/course/${dept}`);
  }
  getLevel(level) {
    return http.get(`/course-t3/course/${level}`);
  }
  getHours(hours) {
    return http.get(`/course-t3/course/${hours}`);
  }
  getDesc(desc) {
    return http.get(`/course-t3/course/${desc}`);
  }
  getSemester(semester) {
    return http.get(`/course-t3/course/${semester}`);
  }
}
export default new CoursesDataService();
