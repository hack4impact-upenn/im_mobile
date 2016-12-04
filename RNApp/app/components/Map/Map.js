import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';

//TODO: fill in tile, topbar
//      back button component
const Map = (props) => {
  const isrc = 'usa';
  return (
    <View style={styles.container}>
    <TopBar title={props.country} back={props.back} />
    <ScrollView >
      <View style={styles.scrollview}>
        <View style={styles.map}>
           <Image style ={styles.mapImg}
            source={{uri:'https://thenetmonitor.org/countries/' + isrc + '/thumb'}}
            />
        </View>
      {/*TODO: Fill in with tile component*/}
        <View style={styles.tile} />
        <View style={styles.tile} />
        <View style={styles.tile} />
        <View style={styles.tile} />
      </View>
    </ScrollView>
    
    </View>
  );
};

Map.propTypes = {
  country: React.PropTypes.string,
  back: React.PropTypes.bool,
};

export default Map;
