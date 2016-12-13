import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';

import { makeRequest, getCountryName } from './../../backend/tempBackend';

console.log('first request');
let responseData = makeRequest('usa');

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

  console.log('bout to make request');
  let responseData = makeRequest('usa');
  console.log('responseData:');
  console.log(responseData);
  //let countryName = getCountryName(responseData);
  let countryName = 'united states';

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
      <Tile titleText='United States of pewp' tileType='data' imageDir={getImageDir('usa')} />
      <Tile titleText={countryName} tileType='data' imageDir={getImageDir('usa')} />
      <Tile titleText='Italy' tileType='country' imageDir={getImageDir('ita')} />
      <Tile titleText='Syria' tileType='data' imageDir={getImageDir('syr')} />
      <Tile titleText='Canada' tileType='country' imageDir={getImageDir('can')} />

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
