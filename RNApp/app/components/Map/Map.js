import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';

//TODO: fill in tile, topbar
//      back button component
const Map = (props) => {
  const isrc =  props.countryCode;//'usa';
  if (country == 'THE WORLD') {
    isrc = 
  }
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
      {/*TODO: Load tiles with data*/}
      <Tile titleText='Data 1' tileType='data'/>
      <Tile titleText='Country 1' tileType='country'/>
      <Tile titleText='Data 2' tileType='data'/>
      <Tile titleText='Country 2' tileType='country'/>

      </View>
    </ScrollView>
    
    </View>
  );
};

Map.propTypes = {
  country: React.PropTypes.string,
  countryCode: React.PropTypes.string,
  back: React.PropTypes.bool,
};

Map.defaultProps = {
  countryCode: 'usa',
  country: 'United States',
  back: false,
}

export default Map;
