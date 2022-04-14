function Movie({movie}) {
	return (
		<div>
			<h2>{movie.title}</h2>
			<img src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt=""/>{/*//(width)w500//original*/}{/*poster_path*/}
		</div>
	)
};

export default Movie;