import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';

class Movie extends React.Component {
  render() {
    return(
      <>
        <Container>
          <CardColumns>
            <Card id="movieCard" style={{ width: '25rem'}} key={this.props.key}>
              <Card.Header id="movieHeader"><p><span>{this.props.title}</span></p></Card.Header>
              {this.props.imgUrl.endsWith('null')? '' : <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title} />}
              <Card.Body id="movieBody">
                <p><span>Released:</span> {this.props.release_date}</p>
                <p><span>Storyline:</span> {this.props.overview}</p>
              </Card.Body>
              <Card.Footer id="movieFooter">
                <p><span>Popularity:</span>{this.props.popularity}</p>
                <p><span>Votes:</span>{this.props.totalVotes}</p>
                <p><span>Average Votes:</span>{this.props.vote_avg}</p>
              </Card.Footer>
            </Card>
          </CardColumns>
        </Container>
      </>
    );
  }
}

export default Movie;
