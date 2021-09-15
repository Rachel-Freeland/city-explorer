import React from 'react';
import Movie from './Movie.js';
import './App.css';

class MovieCards extends React.Component {
  render() {
    return (
      <>
        <h2>Movies with <span>{this.props.city}</span> in the title:</h2>
        {this.props.movies.map( (obj, id) => {
          return (
            <>
              <Movie key={id} title={obj.title} releaseDate={obj.release_date} overview={obj.overview} imgUrl={obj.imgUrl} popularity={obj.popularity} votes={obj.totalVotes} vote_avg={obj.vote_avg} />
            </>
          );
        })
        }
      </>
    );
  }
}

export default MovieCards;
