import React, {
  Component,
  PropTypes
} from 'react';
import Meteor, {
  createContainer
} from 'react-native';
import Geocoder from 'react-native-geocoder';
import Geolocator from './Geolocator';

class GeolocatorContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentLatitude: 0.0,
      currentLongitude: 0.0,
      currentCountry: 'Unknown',
      countryCode: 'Unknown'
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          var location_lat = position.coords.latitude;
          var location_lng = position.coords.longitude;
          Geocoder.geocodePosition({lat: location_lat, lng: location_lng}).then(res => {
            var current_country = res[0]['country'];
            var country_code = res[0]['countryCode'];
            this.setState({
              currentCountry: current_country, 
              countryCode: country_code,
              currentLatitude: location_lat,
              currentLongitude: location_lng
            });
          }).catch(err => console.log(err));
        },
        (error) => {
          alert(JSON.stringify(error));
          this.currentLocation = 'Error in obtaining location';
        }, {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000
        }
    );
  }

  render() {
    return ( 
      < Geolocator currentLatitude = { this.state.currentLatitude }
        currentLongitude = { this.state.currentLongitude }
        currentCountry = { this.state.currentCountry }
        countryCode = { this.state.countryCode }
      />
    );
  }
}

GeolocatorContainer.propTypes = {
  currentLatitude: React.PropTypes.number,
  currentLongitude: React.PropTypes.number,
  currentCountry: React.PropTypes.string,
  countryCode: React.PropTypes.string
};

export default GeolocatorContainer;
