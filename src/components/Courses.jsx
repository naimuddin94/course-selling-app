import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {courses &&
        courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  );
};

export default Courses;
