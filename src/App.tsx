import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./App.scss";
import { Menu } from "./components/Menu/Menu";
import { Gallery } from "./components/Gallery/Gallery";
import { getCourses } from "./api/courses";
import { Course } from "./types";

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const uniqueTags = useMemo(() => {
    const tags = new Set(courses.flatMap((course) => course.tags));
    return Array.from(tags);
  }, [courses]);

  const handleTagClick = useCallback((tag: string) => {
    setSelectedTag(tag);
  }, []);

  useEffect(() => {
    if (selectedTag) {
      const filtered = courses.filter((course) =>
        course.tags.includes(selectedTag)
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses([]);
    }
  }, [selectedTag, courses]);

  return (
    <section className="frame">
      <Menu tags={uniqueTags} onTagClick={handleTagClick} />
      <Gallery courses={filteredCourses} />
    </section>
  );
};

export default App;
