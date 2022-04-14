import './App.css';
import { useState, useEffect } from "react";
import Movie from "./Movie";

function App() {
  const apiKey = "https://api.themoviedb.org/3/movie/popular?api_key=7ecbc6dd03734a3a6fa0376b6698f57f&language=en-US&page=1";

  // [useState] Basically A Variable And A Js Setter // Data Returned Is An Array Of Objects
  const [popular, setPopular] = useState([]);

  // [useEffect] Running "fetchPopular" When Page Renders
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(`${apiKey}`);
    const moviesJson = await data.json();

    //console.log(moviesJson);
    setPopular(moviesJson.results);
  };

  return (
    <div className="App">
      {/*<h1>Hello</h1>*/}



      <div className="popular-movies">
        {popular.map(movie => {
          return <Movie/>;
        })}
      </div>



    </div>
  );
}

export default App;