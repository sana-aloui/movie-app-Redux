import React, { Component } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import '../CSS/movieList.css'
import { connect } from "react-redux";
import { addMovie, updateMovie } from "../actions/MoviesActions";
import {
	Label,
	Input,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			edit: false,
			image: "",
			title: "",
			year: "",
			rating: "",
			id:""
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.editMovie !== this.props.editMovie) {
			this.setState({
				image: this.props.editMovie.image,
				title: this.props.editMovie.title,
				year: this.props.editMovie.year,
				rating: this.props.editMovie.rating
			});
		}
	}
	addOne = () => {
		this.setState({
			modal: true
		});
	};
	edit = () => {
		this.setState({
			image: this.props.editMovie.image,
			title: this.props.editMovie.title,
			year: this.props.editMovie.year,
			rating: this.props.editMovie.rating,
			edit: true
		});
		this.addOne();
	};
	resetState = () => {
		this.setState({
			edit: false,
			modal: false,
			image: "",
			title: "",
			year: "",
			rating: ""
		});
	};

	handleInput = e => {		
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	toggle = () => {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};

	handleAdd=()=>{
		if (this.state.image && this.state.title && this.state.year && this.state.rating) {
			const { title, image, year, rating } = this.state;
			const newMovie = { title, image, year, rating , id:Date.now()};
			!this.state.edit
				? this.props.addMovie(newMovie)
				: this.props.updateMovie(newMovie, this.props.index);
			this.resetState();
			this.toggle()
		} else return alert("Please enter a valid text");
			

	}

	render() {
		return (
			<div>
				<div className="movie-list">
					{this.props.list && this.props.list.map((el, i) => (
						<MovieCard movie={el} key={i} edit={this.edit} />
					))}
					<AddMovie addOne={this.addOne} />
				</div>
				<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add a new movie </ModalHeader>
					<ModalBody>
						<Label>Movie Image :</Label>
						<Input
							name="image"
							className="input-form"
							placeholder=" Enter Movie Image"
							onChange={this.handleInput}
							value={this.state.image}
						/>
						<Label>Movie Title :</Label>
						<Input
							name="title"
							className="input-form"
							placeholder="Enter Movie Title"
							onChange={this.handleInput}
							value ={this.state.title}
						/>
						<Label>Movie's release date :</Label>

						<Input
							name="year"
							className="input-form"
							placeholder="Film's release date"
							onChange={this.handleInput}
							value={this.state.year}
						/>
						<Label>Movie Rating :</Label>
						<Input
							name="rating"
							className="input-form"
							placeholder="Movie Rating"
							onChange={this.handleInput}
							value={this.state.rating}
						/>
					</ModalBody>
					<ModalFooter>
						<Button
							color="primary"
							onClick={() => {
								this.handleAdd()
								this.toggle()
							}}>
							Add
						</Button>
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
				
				
			</div>
		);
	}
}
const mapStateToProps = state => {
	const editMovie = state.editReducer;
	return {
		editMovie,
		index: state.MoviesReducer.findIndex(el => el === editMovie)
	};
};

const mapDispatchToProps = dispatch => ({
	addMovie: newMovie => {
		dispatch(addMovie(newMovie));
	},
	updateMovie: (movie, i) => {
		dispatch(updateMovie(movie, i));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
