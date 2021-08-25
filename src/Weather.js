import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    return(
      <>
        <h2> 3-Day Forecast </h2>
        {this.props.weather.map( (day, i) => {
          return(
            <>
              <ListGroup id="weatherFormat" key={i}>
                <ListGroup.Item>{day}</ListGroup.Item>
              </ListGroup>
            </>
            );
        })}
      </>
    )
  };
}

export default Weather;