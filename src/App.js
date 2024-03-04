import "./App.css";
import { ReactComponent as CalenderSVG } from "./assets/icons/time/calender-1.svg";
function App() {
  return (
    <div className="App flex mt-12 border-8 w-1/2 bg-primary-200 ">
      <h1 className="mr-2 pr-4 border-r-4 font-roboto">COMING SOON PAGE</h1>
      <CalenderSVG className="w-10 h-10 stroke-current fill-current text-primary-300" />
    </div>
  );
}

export default App;
