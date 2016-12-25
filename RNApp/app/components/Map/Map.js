import React, {Component, PropTypes } from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import Loading from './../Loading'

// import { makeRequest, getCountryName } from './../../backend/tempBackend';


class Map extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      title: '',
      iso3Code: '',
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
      this.setState({
        isLoading: false,
        title: responseJson['data']['attributes']['name']
      });
      return responseJson['data'];
    } catch(error) {
      console.error(error);
    }
  }

  // TODO: Figure out how to import local images - right now we are importing from GitHub
  getImageDir(code){
    // return './../../images/country-icons/' + code.toLowerCase() + '.png';
    return 'https://raw.githubusercontent.com/hack4impact/berkman/add-images/' +
      'RNApp/app/images/country-icons/' + code.toLowerCase() + '.png';
  }

  render() {
    let imgUrl;  
    // TODO: Create Loading component
    if (this.props.country == 'THE WORLD') {
        // TODO: Replace this with Internet Monitor world image
        imgUrl ='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Simple_world_map.svg/2000px-Simple_world_map.svg.png'; 
        this.state.title = 'the world';
      } else if (this.state.isLoading) {

        if (this.props.country != 'Unknown') {
          this.state.iso3Code = CountryCodes[this.props.iso2Code.toUpperCase()];
          let responseData = this.makeRequest(this.state.iso3Code.toLowerCase());
          // TODO: Pass response data to tiles
        }

        return (
          <View style={styles.container}>
            <TopBar title={''} back={false} />
              <Loading />
          </View>

        );
    } else {   
        imgUrl = 'https://thenetmonitor.org/countries/' + this.state.iso3Code.toLowerCase() + '/thumb';    
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
