import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchRating from "./SearchRating";
import MovieList from "./MovieList";
import { connect } from "react-redux";
import "../CSS/home.css";

class Home extends Component {
	render() {
		console.log(this.props.movies)
		return (
			<div className="movie-app">
				<header className="searchBar--container">
					<SearchBar search={this.props.searchMovie} />
					<SearchRating />
				</header>
				<main className="movie-app-main">
					<MovieList list={this.props.movieList} new={this.newMovie} />
				</main>
			</div>
		);
	}
}


const mapStateToProps = state => {
	console.log(state)
	return {
		movieList: state.MoviesReducer.filter(el =>
		el.title.toLowerCase().includes(state.SearchReducer.toLowerCase())
	  ).filter(movie => movie.rating >= (state.RatingReducer)),
	  rate: state.RatingReducer
	}
	
  };

export default connect(mapStateToProps)(Home);
// .filter(el => {
// 	if (
// 		el.rating >= state.RatingReducer &&
// 		el.title
// 			.toLowerCase()
// 			.includes(state.SearchReducer.toLowerCase().trim())
// 	)
// 		return el;
