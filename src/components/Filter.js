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
			<button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
			<button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Comedy</button>
			<button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button>
		</div>
	)
};

export default Filter;