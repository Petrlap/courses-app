import { Course } from "../types";

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch("https://logiclike.com/docs/courses.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};
