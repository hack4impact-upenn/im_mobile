import React, { PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import Geocoder from 'react-native-geocoder';
import styles from './styles';
import images from '../../config/images';
import Button from '../../components/Button';



const Geolocator = (props) => {
	return (
		<View style={styles.container}>
		  <View style={styles.body}>
		  	<Text>User's current location is: </Text>
		    <Text>Latitude: {props.currentLatitude}</Text>
		    <Text>Longitude: {props.currentLongitude}</Text>
		    <Text>Country: {props.currentCountry}</Text>
		    <Text>Country Code: {props.countryCode}</Text>
		  </View>
		</View>
	);
};

Geolocator.propTypes = {
	currentLatitude: React.PropTypes.number,
	currentLongitude: React.PropTypes.number,
	currentCountry: React.PropTypes.string,
	countryCode: React.PropTypes.string
};

export default Geolocator;