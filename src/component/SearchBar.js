import React, { Component } from "react";
import FontAwesome from 'react-fontawesome'
import {searchMovie} from '../actions/MoviesActions'
import {connect} from 'react-redux'
import "../CSS/Search.css"

class SearchBar extends Component {
	render() {
		return (
			<div className="searchBar--container">
				<div className="searchBar">
					<input
						className="searchBar--input"
						type="text"
						placeholder="Search for Movie Title ..."
						onChange={e => {
							// const title=e.target.value;
						  this.props.searchMovie(e.target.value);
						}}
					/>
                    <div className="searchBar--submit">
                        <FontAwesome className="searchIcon" name="search"/>


                    </div>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch =>({
	searchMovie: title =>{
		dispatch(searchMovie(title))
	}
})
export default connect(null, mapDispatchToProps)(SearchBar);
