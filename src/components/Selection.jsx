import PropTypes from "prop-types";
import { CgCloseR } from "react-icons/cg";

const Selection = ({
  selectionList,
  remainingTime,
  totalTime,
  totalPrice,
  handleRemoveCourse,
}) => {
  return (
    <div className="col-span-3 max-w-xs mx-auto">
      <div className="bg-white px-4 py-6 rounded-lg">
        <h2 className="font-bold text-base text-[#2F80ED] py-2">
          Credit Hour Remaining {remainingTime} hr
        </h2>
        <hr />
        <h1 className="font-bold text-lg text-slate-800 py-2">Course Name</h1>
        <div className="py-2">
          {selectionList &&
            selectionList.map((course, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-between"
              >
                <p className="py-1 text-sm cursor-pointer">
                  <span className="font-semibold">{index + 1}.</span>{" "}
                  {course.title}
                </p>
                <CgCloseR
                  onClick={() => handleRemoveCourse(course)}
                  className="flex-shrink-0 cursor-pointer hover:text-rose-600 hover:scale-110 duration-200"
                />
              </div>
            ))}
        </div>
        <hr />
        <h2 className="text-slate-600 font-medium py-2">
          Total Credit Hour : {totalTime}
        </h2>
        <hr />
        <h1 className="text-slate-600 font-semibold py-2">
          Total Price : {totalPrice} USD
        </h1>
      </div>
    </div>
  );
};

Selection.propTypes = {
  selectionList: PropTypes.array.isRequired,
  remainingTime: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleRemoveCourse: PropTypes.func.isRequired,
};

export default Selection;
