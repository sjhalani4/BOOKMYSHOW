// import{Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
//Temp
import HomePage from "./pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
    <DefaultHOC path="/"  component={HomePage}/>
    </>
  );
}

export default App;
