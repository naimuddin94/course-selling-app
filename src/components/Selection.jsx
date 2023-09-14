import PropTypes from "prop-types";

const Selection = ({ selectionList, remainingTime, totalTime, totalPrice }) => {
  return (
    <div className="col-span-3">
      <div className="bg-white px-5 py-6 rounded-lg">
        <h2 className="font-bold text-base text-[#2F80ED] py-2">
          Credit Hour Remaining {remainingTime} hr
        </h2>
        <hr />
        <h1 className="font-bold text-lg text-slate-800 py-2">Course Name</h1>
        <div className="py-2">
          {selectionList &&
            selectionList.map((course, index) => (
              <p key={index} className="py-1 text-[0.95rem]">
                <span className="font-semibold">{index + 1}.</span>{" "}
                {course.title}
              </p>
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
};

export default Selection;
