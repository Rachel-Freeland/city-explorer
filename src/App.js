import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
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
      map: ''
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

      const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API}&q=${this.state.searchQuery}&format=json`;
      const locationResponse = await axios.get(locationAPI);
      this.setState({
        lat: locationResponse.data[0].lat,
        lon: locationResponse.data[0].lon,
        display_name: locationResponse.data[0].display_name
      });

      const mapAPI =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API}&lat=${this.state.lat}&lon=${this.state.lon}&center=${this.state.lat},${this.state.lon}&zoom=10&theme=streets`;
      const mapResponse = await axios.get(mapAPI);
      console.log(mapResponse.config.url);
      this.setState({
        map: mapResponse.config.url
      })
  }

  render() {
    return(
      <Container>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={this.handleChange}>
          <Form.Label>City Search</Form.Label>
          <Form.Control type="textarea" placeholder="Enter a city" />
          <br />
          <Button variant="primary" type="submit" onClick={this.handleClick}>Explore!</Button>
        </Form.Group>
        </Form>
        <ListGroup>
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
      </Container>
    );
  }
}

export default App;
