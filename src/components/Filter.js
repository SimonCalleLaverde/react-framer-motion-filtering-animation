import { useEffect } from "react";

function Filter({popular, setFiltered, activeGenre, setActiveGenre}) {
	useEffect(() => {
		if (activeGenre === 0) {
			setFiltered(popular);//Setting "filtered" back to the original array (saved in "popular")
			//console.log("Is 0");
			return;
		};
		const filteredArray = popular.filter(movie =>
			movie.genre_ids.includes(activeGenre)
		);
		setFiltered(filteredArray);
	}, [activeGenre]);

	return (
		<div className="filter-container">
			<button onClick={() => setActiveGenre(0)}>All</button>
			<button onClick={() => setActiveGenre(35)}>Comedy</button>
			<button onClick={() => setActiveGenre(28)}>Action</button>
		</div>
	)
};

export default Filter;