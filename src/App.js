import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Weather from './Weather.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      lat: '',
      lon: '',
      display_name: '',
      map: '',
      errorMessage: '',
      showAlert: false,
      weather: []
    };
  }

  handleChange= (e) => {
    e.preventDefault();
    this.setState({
      searchQuery: e.target.value
    });
  }

  handleClick = async (e) => {
      e.preventDefault();
      try{
      const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API}&q=${this.state.searchQuery}&format=json`;
      const locationResponse = await axios.get(locationAPI);
      this.setState({
        lat: locationResponse.data[0].lat,
        lon: locationResponse.data[0].lon,
        display_name: locationResponse.data[0].display_name
      });

      const mapAPI =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API}&lat=${this.state.lat}&lon=${this.state.lon}&center=${this.state.lat},${this.state.lon}&zoom=10&theme=streets`;
      const mapResponse = await axios.get(mapAPI);
      this.setState({
        map: mapResponse.config.url
      });

      const weatherAPI = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lat={this.state.lat}&lon=${this.state.lon}`;
      const weatherResponse = await axios.get(weatherAPI);
      this.setState({
        weather: weatherResponse.data
      });
      console.log(this.state.weather);
    } catch(err) {
      this.setState({
        errorMessage: err.message,
        showAlert: true
      });
    }
  }

  render() {
    return(
      <Container>
        {this.state.errorMessage &&
        <Alert id="alert" variant="danger" showAlert={this.state.showAlert}>
          Error: Unable to GeoCode!
        </Alert>}
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={this.handleChange}>
          <Form.Label id="formLabel">City Search</Form.Label>
          <Form.Control type="textarea" placeholder="Enter a city" />
          <br />
          <Button id="explore" variant="primary" type="submit" onClick={this.handleClick}>Explore!</Button>
        </Form.Group>
        </Form>
        <ListGroup id="cityLatLon">
          <ListGroup.Item>City: {this.state.display_name}</ListGroup.Item>
          <ListGroup.Item>Latitude: {this.state.lat}</ListGroup.Item>
          <ListGroup.Item>Longitude: {this.state.lon}</ListGroup.Item>
        </ListGroup>
        <br />
        {this.state.map &&
        <Figure id="map">
          <br />
          <Figure.Image src={this.state.map} alt="map" width={800} height={800} />
        </Figure>}
        <br />
        <Weather weather={this.state.weather} />
      </Container>
    );
  }
}

export default App;
