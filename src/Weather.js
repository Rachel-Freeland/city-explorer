import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    return(
      <>
        <h2> 16-Day Forecast for <span>{this.props.city}</span> </h2>
        {this.props.weather.map( (day, i) => {
          return(
            <>
              <ListGroup id="weatherFormat" key={i}>
                <ListGroup.Item id="listItem"><span>{day.date}:</span> {day.dailyForecast} </ListGroup.Item>
              </ListGroup>
            </>
          );
        })}
      </>
    );
  }
}

export default Weather;
