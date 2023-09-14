import { useState } from "react";
import Courses from "./components/Courses";
import Selection from "./components/Selection";

function App() {
  const [selectionList, setSelectionList] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20);
  const [totalTime, setTotalTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelection = (course) => {
    const selected = selectionList.find((sCourse) => sCourse.id === course.id);
    if (selected) {
      return alert("Course already selected");
    } else {
      if (remainingTime < course.time) {
        return alert("You have no enough time");
      }
      setTotalTime(totalTime + course.time);
      setRemainingTime(remainingTime - course.time);
      setSelectionList([...selectionList, course]);
      setTotalPrice(totalPrice + course.price);
    }
  };

  console.log(totalTime, remainingTime);

  return (
    <div className="container mx-auto px-5 md:px-8">
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
        />
      </div>
    </div>
  );
}

export default App;
