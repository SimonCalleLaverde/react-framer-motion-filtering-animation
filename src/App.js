import './App.css';
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const apiKey = "https://api.themoviedb.org/3/movie/popular?api_key=7ecbc6dd03734a3a6fa0376b6698f57f&language=en-US&page=1";

  // [useState] Basically A Variable And A Js Setter // Data Returned Is An Array Of Objects
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);//All

  // [useEffect] Running "fetchPopular" When Page Renders
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(`${apiKey}`);
    const moviesJson = await data.json();

    //console.log(moviesJson);
    //console.log(moviesJson.results);
    setPopular(moviesJson.results);
    setFiltered(moviesJson.results);
  };

  return (
    <div className="App">
      {/*<h1>Hello</h1>*/}

      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>

      <motion.div layout className="popular-movies">{/*animate={{y: 100}}*/}{/*layout="true"*/}
        <AnimatePresence>
          {filtered.map(movie => {//popular
            return <Movie key={movie.id} movie={movie}/>;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;