import React, { Component } from "react";
import "../CSS/Card.css";
import Rating from "./Rating";
import { connect } from "react-redux";
import { removeMovie, editMovie } from "../actions/MoviesActions";
import {Link} from 'react-router-dom'



class MovieCard extends Component {
	render() {
		const { image, title, year, rating,id } = this.props.movie;
		return (
			<div className="movie-card">
				<img className="movie-image" src={image} alt="" />
				<h3 className="movie-title">{title}</h3>
				<p className="movie-year">{year}</p>
				<span>
					<Rating count={rating} />
				</span>
				<Link to={`/Details/${id}`} className="button1">
					See more
				</Link>
				<div>
					<button
						className="button1"
						onClick={() => {
							this.props.editMovie(this.props.movie);
							this.props.edit();
						}}>
						Edit
					</button>
					<button
						className="button1"
						onClick={() => {
							this.props.removeMovie(id);
						}}>
						Remove
					</button>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	removeMovie: title => {
		dispatch(removeMovie(title));
	},
	editMovie: movie => {
		dispatch(editMovie(movie));
	}
});

export default connect(null, mapDispatchToProps)(MovieCard);
