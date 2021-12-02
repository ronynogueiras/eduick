import { Course } from "../domain/entities/Course";
import api from "./api";

const listCourses = async (page: number): Promise<any[] | Course[]> => {
  try {
    const courses: Course[] = await (
      await api().get("/courses", { params: { page } })
    ).data;
    return [courses];
  } catch (error) {
    return [null, error];
  }
};

export { listCourses };
