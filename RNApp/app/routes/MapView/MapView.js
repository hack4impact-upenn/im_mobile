import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import Map from './../../components/Map';

const MapView = (props) => {
  return (
    <View style={styles.container}>
      <Header/>
      <Map {...props} navigator={props.navigator} country={props.country} iso2Code={props.iso2Code}/>
    </View>
  );
};

MapView.propTypes = {
  country: React.PropTypes.string, 
  iso2Code: React.PropTypes.string, 
  back: React.PropTypes.bool,
  navigator: React.PropTypes.object,
};

export default MapView;
