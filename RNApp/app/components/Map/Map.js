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

  // TODO: Figure out how to import local images - right now we are importing from GitHub
  const getImageDir = (code) => {
    // return './../../images/country-icons/' + code.toLowerCase() + '.png';
    return 'https://raw.githubusercontent.com/hack4impact/berkman/add-images/' +
      'RNApp/app/images/country-icons/'+code.toLowerCase()+'.png';
  };

  const getMetricImage = (code) => {
    // metric types are: list, map, line, bar, 
    return 'https://raw.githubusercontent.com/berkmancenter/internet_monitor/dev/app/assets/images/world-icon.png';
  };

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
      {/*TODO: Replace country code with corresponding data country code*/}
      <Tile titleText='United States' tileType='data' imageDir={getMetricImage('bar')} />
      <Tile titleText='Italy' tileType='country' imageDir={getMetricImage('bar')} />
      <Tile titleText='Syria' tileType='data' imageDir={getMetricImage('bar')} />
      <Tile titleText='Canada' tileType='country' imageDir={getMetricImage('bar')} />

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
