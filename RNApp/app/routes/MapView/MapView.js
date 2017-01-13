import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Map from './../../components/Map';
// import { makeRequest, getCountryName } from './../../backend/tempBackend';

const MapView = (props) => {
  return (
    <View style={styles.container}>
      <Map {...props}/>
    </View>
  );
};

MapView.propTypes = {
  country: React.PropTypes.string,  
  back: React.PropTypes.bool,
};

export default MapView;
