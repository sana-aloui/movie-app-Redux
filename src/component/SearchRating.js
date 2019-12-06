import React from "react";
import Rating from "./Rating";
import {searchByrate} from '../actions/MoviesActions'
import { connect } from "react-redux";
const SearchRating = (props) => (
	<div className="rating-filter">
		{/* <span className="rating-text">Minimum rating</span> */}
		<Rating
			count={props.rating}
			ratingChange={props.searchByrate}	
		/>
	</div>
);

const mapStateToProps = state =>({rating: state.RatingReducer})

const mapDispatchToProps=dispatch =>({
    searchByrate: payload => dispatch (searchByrate(payload))
})

export default connect(mapStateToProps,mapDispatchToProps) (SearchRating);