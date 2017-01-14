import React, {Component, PropTypes } from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import Loading from './../Loading'

import { getCountryIndicators } from './../../backend/tempBackend';
import { getMetricsList } from './../../backend/tempBackend';


class Map extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      title: '',
      iso3Code: '',
      indicators: {},
      metrics: {},
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

  async makeIndicatorRequest() {
    console.log("making world request now****");
    // Make request to Berkman API
    const apiUrl = 'https://thenetmonitor.org/v2/indicators/';
    let requestUrl = apiUrl;
    let data = '';
    try {
      let response = await fetch(requestUrl);
      let responseJson = await response.json();
      this.state.metrics = getMetricsList(responseJson);
      this.setState({
        isLoading: false,
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
  };

  getMetricImage(code) {
    // metric types are: list, map, line, bar, 
    return 'https://raw.githubusercontent.com/berkmancenter/internet_monitor/dev/app/assets/images/world-icon.png';
  };  

  render() {
    let imgUrl;  
    let metricList  = [];
    if (this.state.isWorld) {
        // TODO: Replace this with Internet Monitor world image
        imgUrl ='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Simple_world_map.svg/2000px-Simple_world_map.svg.png'; 
        this.state.title = 'the world';
        let responseData = this.makeIndicatorRequest();
        let i = 1;
        for (let key in this.state.metrics) {
          console.log(key);
          let metric_short_name = key;
          let metric_full_name = this.state.metrics[key].long_name;
          let metric_type = this.state.metrics[key].type;
          metricList.push(<Tile key = {i} titleText={metric_short_name} figureText = '' detailText = {metric_full_name} tileType='data' imageDir={this.getMetricImage(metric_type)} />)
          i += 1;
        }
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
        { metricList }
        <Tile titleText='United States' figureText = ''tileType='data' imageDir={this.getMetricImage('bar')} />
        <Tile titleText='Italy' tileType='country' imageDir={this.getMetricImage('bar')} />
        <Tile titleText='Syria' tileType='data' imageDir={this.getMetricImage('bar')} />
        <Tile titleText='Canada' tileType='country' imageDir={this.getMetricImage('bar')} />
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
