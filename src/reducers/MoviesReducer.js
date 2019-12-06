import {
	ADD_MOVIE,
	REMOVE_MOVIE,
	UPDATE_MOVIE
} from "../constants/ActionsTypes";
import avengers from "../images/avengers.png";
import deadpool from "../images/deadpool.png";
import it from "../images/it.png";
import godfather from "../images/godfather.png";

const initialMovies = [
	{
		image: `${avengers}`,
		title: "Avengers",
		year: "2019",
		rating: 4,
		id: "aven",
		description:"https://www.youtube.com/embed/izxgf6RU98Y"
	},
	{
		image: `${deadpool}`,
		title: "Deadpool",
		year: "2016",
		rating: 4,
		id: "dead",
		description:"https://www.youtube.com/embed/Xithigfg7dA"
	},
	{
		image: `${it}`,
		title: "IT",
		year: "2019",
		rating: 1,
		id: "it",
		description:"https://www.youtube.com/embed/7TkIQV3W9kk"
	},
	{
		image: `${godfather}`,
		title: "The Godfather",
		year: "1972",
		rating: 5,
		id: "god",
		description:"https://www.youtube.com/embed/fB_8VCwXydM"
	}
];

const MoviesReducer = (state = initialMovies, action) => {
	if (action.type === ADD_MOVIE) {
		return state.concat(action.movie);
	} else if (action.type === UPDATE_MOVIE) {
		return state.map((el, i) => {
			if (i === action.i) {
				return action.movie;
			} else return el;
		});
	}


	else if (action.type === REMOVE_MOVIE) {
		return state.filter(el => el.id !== action.payload);
	} else return state;
};

export default MoviesReducer;
