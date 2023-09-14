import PropTypes from "prop-types";
import { CgDollar } from "react-icons/cg";
import { BsBook } from "react-icons/bs";

const Course = ({ course: { title, img, description, price, time } }) => {
  return (
    <div className="card bg-white">
      <figure className="px-5 pt-5">
        <img src={img} alt={title + " image."} className="rounded-xl" />
      </figure>
      <div className="card-body p-5 items-center text-center">
        <h2 className="card-title text-base text-slate-800">
          {title}
        </h2>
        <p className="text-xs text-slate-500">{description}</p>
        <div className="flex items-center gap-3">
          <CgDollar className="text-2xl" />
          <p className="font-medium text-slate-600">Price: {price}</p>
          <BsBook className="text-2xl" />
          <p className="font-medium text-slate-600">Credit: {time}hr</p>
        </div>
        <button className="btn btn-block bg-[#2F80ED] text-white hover:text-[#2F80ED] min-h-0 h-10 mt-2">
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
