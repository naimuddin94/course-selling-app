import { useState } from "react";
import Courses from "./components/Courses";
import Selection from "./components/Selection";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectionList, setSelectionList] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20);
  const [totalTime, setTotalTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelection = (course) => {
    const selected = selectionList.find((sCourse) => sCourse.id === course.id);
    if (selected) {
      return toast.error("Course already selected");
    } else {
      if (remainingTime < course.time) {
        return toast.warn("You have no Credit Hour");
      }
      setTotalTime(totalTime + course.time);
      setRemainingTime(remainingTime - course.time);
      setSelectionList([...selectionList, course]);
      setTotalPrice(totalPrice + course.price);
    }
  };

  const handleRemoveCourse = (course) => {
    const remainingSelectionList = selectionList.filter(
      (selectedCourse) => selectedCourse.id !== course.id
    );
    setSelectionList(remainingSelectionList);
    setTotalTime(totalTime - course.time);
    setRemainingTime(remainingTime + course.time);
    setTotalPrice(totalPrice - course.price);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <h1 className="text-2xl text-slate-700 font-bold text-center py-3">
        Course Registration
      </h1>
      <div className="md:grid grid-cols-12 gap-4 mt-5">
        <Courses handleSelection={handleSelection} />
        <Selection
          selectionList={selectionList}
          remainingTime={remainingTime}
          totalTime={totalTime}
          totalPrice={totalPrice}
          handleRemoveCourse={handleRemoveCourse}
        />
      </div>
    </div>
  );
}

export default App;
