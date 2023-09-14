import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Course from "./Course";

const Courses = ({ handleSelection }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="col-span-9 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses &&
        courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleSelection={handleSelection}
          />
        ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelection: PropTypes.func.isRequired,
};

export default Courses;
