import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import styles from './styles';
import Map from './../../components/Map';

const MapView = (props) => {
  return (
    <View style={styles.container}>
      <Header/>
      <Map {...props} navigator={props.navigator}/>
    </View>
  );
};

MapView.propTypes = {
  country: React.PropTypes.string,  
  back: React.PropTypes.bool,
  navigator: React.PropTypes.object,
};

export default MapView;
