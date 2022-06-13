import React from "react";
import { CourseCard } from "@components/ui/course";

const List = ({ courses }) => {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  );
};

export default List;
