import React from 'react';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
  render() {
    return(
      <>
        <h2> 16-Day Forecast for <span>{this.props.city}:</span> </h2>
        {this.props.weather.map( (day, id) => {
          return(
            <>
              <WeatherDay id="weatherFormat" key={id} date={day.date} forecast={day.dailyForecast} />
            </>
          );
        })}
      </>
    );
  }
}

export default Weather;
