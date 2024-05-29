import React, { useCallback } from "react";
import { Course, GalleryProps } from "../../types";
import styles from "./Gallery.module.scss";

const chunkArray = (array: Course[], size: number): Course[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

export const Gallery: React.FC<GalleryProps> = React.memo(({ courses }) => {
  const chunkedCourses = useCallback(() => chunkArray(courses, 3), [courses]);

  return (
    <div className={styles.gallery}>
      {chunkedCourses().map((chunk, index) => (
        <div key={index} className={styles.gallery__line}>
          {chunk.map((course) => (
            <article
              key={course.id}
              className={styles.card}
              style={{ backgroundColor: course.bgColor }}
            >
              <img
                src={course.image}
                alt={course.name}
                className={styles.card__image}
              />
              <h2 className={styles.card__title}>{course.name}</h2>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
});
