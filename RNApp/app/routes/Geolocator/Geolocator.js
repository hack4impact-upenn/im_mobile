import React from 'react';
import { Image, Text, View } from 'react-native'
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
		  </View>
		</View>
	);
};

Geolocator.propTypes = {
	currentLatitude: React.PropTypes.String,
	currentLongitude: React.PropTypes.String
};

export default Geolocator;