import Courses from "./components/Courses";

function App() {
  return (
    <div className="container mx-auto px-5 md:px-8">
      <h1 className="text-2xl text-slate-700 font-bold text-center">
        Course Registration
      </h1>
      <div>
        <Courses />
      </div>
    </div>
  );
}

export default App;
