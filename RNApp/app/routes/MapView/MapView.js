import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Map from './../../components/Map';

const MapView = (props) => {
  return (
    <View style={styles.container}>
      <Map country={props.country}/>
    </View>
  );
};

MapView.propTypes = {
  country: React.PropTypes.string,  
};

export default MapView;
