import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    return(
      <>
        <Card id="card" style={{ width: '30rem'}} key={this.props.key}>
          <Card.Title id="cardTitle">{this.props.date}</Card.Title>
          <Card.Body id="cardBody">{this.props.forecast}</Card.Body>
        </Card>
      </>
    );
  }
}

export default WeatherDay;
