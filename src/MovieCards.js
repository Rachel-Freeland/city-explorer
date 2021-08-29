import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import './App.css';

class MovieCards extends React.Component {
  render() {
    return (
      <>
        <h2>Movies with <span>{this.props.city}</span> in the title:</h2>
        {this.props.movies.map( (obj, i) => {
          return (
            <Container id="container">
              <CardColumns id="columns">
                <Card id="movieCard" style={{width: '24rem'}} key={i}>
                  <Card.Header id="movieHeader"><p><span>{obj.title}</span></p></Card.Header>
                  <Card.Img id="movieImg" variant="top" src={obj.imgUrl} alt={obj.title} />
                  <Card.Body id="movieBody">
                    <p><span>Released:</span> {obj.release_date}</p>
                    <p><span>Storyline:</span> {obj.overview}</p> 
                  </Card.Body>
                  <Card.Footer id="movieFooter">
                    <p><span>Popularity:</span> {obj.popularity}</p>
                    <p><span>Votes:</span> {obj.totalVotes}</p>
                    <p><span>Average vote:</span> {obj.vote_avg}</p>
                  </Card.Footer>
                </Card>
              </CardColumns>
            </Container>
          );
        })
        }
      </>
    );
  }
}
export default MovieCards;
