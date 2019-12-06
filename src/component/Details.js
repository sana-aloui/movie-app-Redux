import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CSS/Details.css";

import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";

class Details extends Component {
	render() {
		console.log(this.props);
		const {
			title,
			description
		} = this.props.movieListFrmDetails.filter(
			el => el.id === this.props.match.params.id
		)[0];
		console.log(title);
		return (
			<div>
				<Link to="/">
					<FontAwesome className="fas fa-arrow-left arrow" name="search" />
				</Link>
				<div>
					<h1 className="title--detail"> {title} </h1>
					<div className="detail">
						<p></p>
						<iframe className="video" src={description}></iframe>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		movieListFrmDetails: state.MoviesReducer
	};
};

export default connect(mapStateToProps)(Details);
