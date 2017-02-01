import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import Map from './../../components/Map';

const MapView = (props) => {
  return (
    <View style={styles.container}>
      <Header/>
      <Map {...props}/>
    </View>
  );
};

MapView.propTypes = {
  country: React.PropTypes.string,  
  back: React.PropTypes.bool,
};

export default MapView;
