import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';

const Map = (props) => {
  let imgUrl;
  if (props.country == 'THE WORLD') {
    // TODO: Replace this with Internet Monitor world image
    imgUrl ='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Simple_world_map.svg/2000px-Simple_world_map.svg.png'; 
  } else {
    props.iso3Code = CountryCodes[props.iso2Code.toUpperCase()];
    imgUrl = 'https://thenetmonitor.org/countries/' + props.iso3Code.toLowerCase() + '/thumb';
  }
  return (
    <View style={styles.container}>
    <TopBar title={props.country.toUpperCase()} back={props.back} />
    <ScrollView >
      <View style={styles.scrollview}>
        <View style={styles.map}>
           <Image style ={styles.mapImg}
            source={{uri:imgUrl}}
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
  iso2Code: React.PropTypes.string,
  back: React.PropTypes.bool,
};

Map.defaultProps = {
  country: 'United States',
  iso2Code: 'US',
  iso3Code: 'USA',
  back: false,
}

export default Map;
