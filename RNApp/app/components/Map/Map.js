import React, {Component, PropTypes } from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import Loading from './../Loading'

import { getCountryIndicators } from './../../backend/tempBackend';


class Map extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      title: '',
      iso3Code: '',
      indicators: {},
      isWorld: (this.props.country == 'THE WORLD'),
    }; 
  }

  async makeRequest(countryCode) {
    // Make request to Berkman API
    const apiUrl = 'https://thenetmonitor.org/v2/countries/';
    let requestUrl = apiUrl + countryCode;
    let data = '';
    try {
      let response = await fetch(requestUrl);
      let responseJson = await response.json();
      this.state.indicators = getCountryIndicators(responseJson);
      this.setState({
        isLoading: false,
        title: responseJson['data']['attributes']['name']
      });

      return responseJson['data'];
    } catch(error) {
      console.error(error);
    }
  }

  // TODO: Import local images - right now we are importing from GitHub
  getImageDir(code){
    // return './../../images/country-icons/' + code.toLowerCase() + '.png';
    return 'https://raw.githubusercontent.com/hack4impact/berkman/add-images/' +
      'RNApp/app/images/country-icons/' + code.toLowerCase() + '.png';
  }

  render() {
    let imgUrl;  
    if (this.state.isWorld) {
        // TODO: Replace this with Internet Monitor world image
        imgUrl ='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Simple_world_map.svg/2000px-Simple_world_map.svg.png'; 
        this.state.title = 'the world';
    } else if (this.state.isLoading) {
      if (this.props.country != 'Unknown') {
        this.state.iso3Code = CountryCodes[this.props.iso2Code.toUpperCase()];
        let responseData = this.makeRequest(this.state.iso3Code.toLowerCase());
      }

      return (
        <View style={styles.container}>
          <TopBar title={''} back={false} />
            <Loading />
        </View>
      );
    } else {   
        imgUrl = 'https://thenetmonitor.org/countries/' + this.state.iso3Code.toLowerCase() + '/thumb';    
        // TODO: Pass data to tiles here 
        // Note: indicator data is located in this.state.indicators, see tempBackend.js for format
    }

    return (
      <View style={styles.container}>
      <TopBar title={this.state.title.toUpperCase()} back={this.props.back} />
      <ScrollView >
        <View style={styles.scrollview}>
          <View style={styles.map}>
             <Image style ={styles.mapImg}
              source={{uri: imgUrl}}
              />
          </View>
        {/*TODO: Load tiles with data*/}
        {/*TODO: Replace country code with corresponding data country code*/}
        <Tile titleText='United States' tileType='data' imageDir={this.getImageDir('usa')} />
        <Tile titleText='Italy' tileType='country' imageDir={this.getImageDir('ita')} />
        <Tile titleText='Syria' tileType='data' imageDir={this.getImageDir('syr')} />
        <Tile titleText='Canada' tileType='country' imageDir={this.getImageDir('can')} />

        </View>
      </ScrollView>
      
      </View>
    );
  }
};

Map.propTypes = {
  country: React.PropTypes.string,
  iso2Code: React.PropTypes.string,
  back: React.PropTypes.bool,
};

export default Map;
