import Courses from "./components/Courses";
import Selection from "./components/Selection";

function App() {
  return (
    <div className="container mx-auto px-5 md:px-8">
      <h1 className="text-2xl text-slate-700 font-bold text-center py-3">
        Course Registration
      </h1>
      <div className="md:grid grid-cols-12 gap-4">
        <Courses />
        <Selection/>
      </div>
    </div>
  );
}

export default App;
