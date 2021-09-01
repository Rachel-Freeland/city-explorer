import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    return(
      <>
        <Card style={{ width: '20rem'}}>
          <Card.Title>{this.day.date}</Card.Title>
          <Card.Body>{this.day.dailyForecast}</Card.Body>
        </Card>
      </>
    );
  }
}

export default WeatherDay;