import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  
  
  };

  class MapContainer extends Component {
    
    render() {
      return (
        <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 39.149, lng: 34.160}}
      >
        <Marker position={{ lat: 39.148858, lng: 34.159830}} />
        
      </Map>
      );
    }
  }

  
  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
  })(MapContainer)

  