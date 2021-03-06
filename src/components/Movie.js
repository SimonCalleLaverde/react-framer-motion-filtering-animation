import { motion } from "framer-motion";

function Movie({movie}) {
	// To use below and print out Genre Id's for view/debugging
	//let iterations = movie.genre_ids.length;

	return (
		<motion.div animate={{opacity: 1, scale: 1}} intial={{opacity: 0, scale: 0.5}} exit={{opacity: 0, scale: 0.5}} transition={{duration: 0.3}} layout>
			<h4>{movie.title}</h4>

			{/* Width (e.g. "w500" / "original") */}
			<img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt=""/>{/*backdrop_path*/}
			
			{/* Printing out Genre Id's (in one line of JS), last iteration without "," */}
			{/*<p>{movie.genre_ids.map(item => (!--iterations ? item : item + ', '))}</p>*/}
		</motion.div>
	)
};

export default Movie;