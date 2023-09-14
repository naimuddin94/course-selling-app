import PropTypes from "prop-types";

const Selection = ({ selectionList }) => {
  return (
    <div className="col-span-3">
      <div className="bg-white px-5 py-6 rounded-lg">
        <h2 className="font-bold text-base text-[#2F80ED] py-2">
          Credit Hour Remaining 7 hr
        </h2>
        <hr />
        <h1 className="font-bold text-lg text-slate-800 py-2">Course Name</h1>
        <div className="py-2">
          {selectionList &&
            selectionList.map((course, index) => (
              <p key={index} className="py-1">{`${index + 1} ${
                course.title
              }`}</p>
            ))}
        </div>
        <hr />
        <h2 className="text-slate-600 font-medium py-2">
          Total Credit Hour : 13
        </h2>
        <hr />
        <h1 className="text-slate-600 font-semibold py-2">
          Total Price : 48000 USD
        </h1>
      </div>
    </div>
  );
};

Selection.propTypes = {
  selectionList: PropTypes.array,
};

export default Selection;
