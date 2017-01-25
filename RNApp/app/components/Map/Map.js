import React, {Component, PropTypes } from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import Loading from './../Loading';
import images from './../../config/images';
import { getCountryIndicators } from './../../backend/indicators';


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

  /* 
  Makes request to the Berkman API given an ISO3 country code
  If successful, updates the state and returns the 'data' part of the country's JSON
  */
  async makeRequest(countryCode) {
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

  /* Returns country icon given an ISO3 country code */
  getCountryIcon(code){
    return images.countryIcons[code.toLowerCase()];
  }

  /* Returns country image given an ISO3 country code */
  getCountryImage(code){
    return images.countryImages[code.toLowerCase()];
  }

  render() {
    let img;  
    if (this.state.isWorld) {
        img = images.worldMap;
        this.state.title = 'the world';
    } else if (this.state.isLoading) {
      if (this.props.country != 'Unknown') {
        if (!this.props.iso2Code) {
          return (
            <View style={styles.container}>
              <TopBar title={''} back={false} />
                <Text>
                  You are not in a valid country.
                </Text>  
            </View> 
          );
        }
        
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
        img = this.getCountryImage(this.state.iso3Code);
        // TODO: Pass data to tiles here 
        // Note: indicator data is located in this.state.indicators, see indicators.js for format
    }

    return (
      <View style={styles.container}>
      <TopBar title={this.state.title.toUpperCase()} back={this.props.back} />
      <ScrollView >
        <View style={styles.scrollview}>
          <View style={styles.map}>
             <Image style ={styles.mapImg}
              source={img}
              />
          </View>
        {/* TODO: Load tiles with data */}
        {/* TODO: Replace country code with corresponding data country code */}
        <Tile titleText='United States' tileType='data' imageDir={this.getCountryIcon('usa')} />
        <Tile titleText='Italy' tileType='country' imageDir={this.getCountryIcon('ita')} />
        <Tile titleText='Syria' tileType='data' imageDir={this.getCountryIcon('syr')} />
        <Tile titleText='Canada' tileType='country' imageDir={this.getCountryIcon('can')} />

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
