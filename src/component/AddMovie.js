import React, { Component } from 'react';
import './MovieCard';
import '../CSS/Card.css'


class AddMovie extends Component {
  render() {
    return (
      <div>
        
        <button className="movie-card add-button" onClick={this.props.addOne}>+</button>
      </div>
    )
  }
}
export default AddMovie;