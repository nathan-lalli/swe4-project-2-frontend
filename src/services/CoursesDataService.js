import http from "../http-common";
class CoursesDataService {
  getAll() {
    return http.get("/course-t3/course");
  }
  get(id) {
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
}
export default new CoursesDataService();
