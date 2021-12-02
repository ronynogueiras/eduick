import type { NextApiRequest, NextApiResponse } from "next";
import { Course } from "../../src/domain/entities/Course";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Course[]>
) {
  const courses: Course[] = new Array(12).fill({
    title: "Master English: Improve Your Speaking",
    image: "/images/course_image.png",
    rating: 3,
    lessons: 10,
  });
  res.status(200).json(courses);
}
