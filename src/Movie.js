import React from 'react';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return(
      <>
        <Card id="movieCard" style={{ width: '20rem'}}>
          <Card.Header id="movieHeader"><p><span>{this.props.obj.title}</span></p></Card.Header>
          {this.obj.imgUrl.endsWith('null')? '' : <Card.Img variant="top" src={this.obj.imgUrl} alt={this.props.obj.title} />}
          <Card.Body id="movieBody">
            <p><span>Released:</span> {this.props.obj.release_date}</p>
            <p><span>Storyline:</span> {this.props.obj.overview}</p>
          </Card.Body>
          <Card.Footer id="movieFooter">
            <p><span>Popularity:</span>{this.props.obj.popularity}</p>
            <p><span>Votes:</span>{this.props.obj.totalVotes}</p>
            <p><span>Average Votes:</span>{this.props.obj.vote_avg}</p>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default Movie;