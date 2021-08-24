import React from 'react';
import Button from 'react-bootstrap/Button';
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
      display_name: ''
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
      console.log(locationResponse);
      this.setState({
        lat: locationResponse.data[0].lat,
        lon: locationResponse.data[0].lon,
        display_name: locationResponse.data[0].display_name
      });
  }

  render() {
    return(
      <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={this.handleChange}>
          <Form.Label>City Search</Form.Label>
          <Form.Control type="textarea" placeholder="Enter a city" />
        </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleClick}>Explore!</Button>
        </Form>
        <br/>
        <ListGroup>
          <ListGroup.Item>City: {this.state.display_name}</ListGroup.Item>
          <ListGroup.Item>Latitude: {this.state.lat}</ListGroup.Item>
          <ListGroup.Item>Longitude: {this.state.lon}</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default App;
