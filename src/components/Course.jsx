import PropTypes from "prop-types";
import { CgDollar } from "react-icons/cg";
import { BsBook } from "react-icons/bs";

const Course = ({ course, handleSelection }) => {
  const { title, img, description, price, time } = course;
  return (
    <div className="card bg-white rounded-lg shadow-sm hover:shadow-md duration-200">
      <figure className="px-5 pt-5">
        <img src={img} alt={title + " image."} className="rounded-lg w-full" />
      </figure>
      <div className="card-body p-5 items-start">
        <h2 className="card-title text-base text-left text-slate-800">
          {title}
        </h2>
        <p className="text-xs text-slate-500">{description}</p>
        <div className="flex items-center gap-3">
          <CgDollar className="text-xl text-slate-700" />
          <p className="font-medium text-slate-500">Price: {price}</p>
          <BsBook className="text-xl text-slate-700" />
          <p className="font-medium text-slate-500">Credit: {time}hr</p>
        </div>
        <button
          onClick={() => handleSelection(course)}
          className="btn btn-block bg-[#2F80ED] text-white hover:text-slate-700 min-h-0 h-10 mt-2 normal-case"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelection: PropTypes.func.isRequired,
};

export default Course;
