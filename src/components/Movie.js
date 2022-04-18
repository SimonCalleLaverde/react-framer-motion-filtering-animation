function Movie({movie}) {
	// To use below and print out Genre Id's for view/debugging
	let iterations = movie.genre_ids.length;

	return (
		<div>
			<h4>{movie.title}</h4>

			{/* Width (e.g. "w500" / "original") */}
			<img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt=""/>{/*backdrop_path*/}
			
			{/* Printing out Genre Id's (in one line of JS), last iteration without "," */}
			<p>
				{movie.genre_ids.map(item => (!--iterations ? item : item + ', '))}
			</p>
		</div>
	)
};

export default Movie;