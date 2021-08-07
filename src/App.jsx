// import{Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
//Temp
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plays from "./pages/plays.page";




function App() {
  return (
    <>

    <DefaultHOC path="/" exact  component={HomePage}/>
    <MovieHOC path="/movies/:id" exact  component={Movie} />
    <DefaultHOC path="/plays" exact  component={plays}/>

    </> 
  );
}

export default App;
