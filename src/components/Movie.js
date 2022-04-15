function Movie({movie}) {
	return (
		<div>
			<h4>{movie.title}</h4>
			<img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt=""/>{/*//Width//w500//original*/}{/*backdrop_path*/}
		</div>
	)
};

export default Movie;