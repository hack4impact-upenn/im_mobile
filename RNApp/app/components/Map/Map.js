import React, {Component, PropTypes } from 'react';
import MapView from 'react-native-maps';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import CountryCodes from './../../config/countryCodes';
import CountryToId from './../../config/countryToId';
import Countries from './../../config/countries';
import Loading from './../Loading';
import images from './../../config/images';
import { getCountryIndicators } from './../../backend/indicators';
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
      markers: [],
      countryData: {},
      isWorld: (this.props.country == 'THE WORLD'),
    }; 
  }

  componentDidMount() {
    if (this.state.isWorld) {
      this.makeIndicatorRequest();
      for (var countryName in CountryToId) {
        var countryCode = CountryToId[countryName];  
        this.makeCountryDataRequest(countryCode);
      }      
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.iso2Code) {
      this.setState({
        iso3Code: CountryCodes[nextProps.iso2Code.toUpperCase()],
        isWorld: false,
        isLoading: false,
        title: nextProps.country
      });      
    }
  }

  /* 
  Makes request to the Berkman API given an ISO3 country code
  If successful, updates the state and returns the 'data' part of the country's JSON
  */

  async makeCountryDataRequest(countryCode) {
    const apiUrl = 'https://thenetmonitor.org/v2/countries/';
    let requestUrl = apiUrl + countryCode;
    let data = '';
    try {
      let response = await fetch(requestUrl);
      let responseJson = await response.json();
      this.state.countryData[countryCode] = getCountryIndicators(responseJson);
      this.setState({
        isLoading: false,
      });

      return responseJson['data'];
    } catch(error) {
      console.error(error);
    }    
  }

  async makeIndicatorRequest() {
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

  /* Returns country icon given an ISO3 country code */
  getCountryIcon(code){
    return images.countryIcons[code.toLowerCase()];
  }

  /* Returns country image given an ISO3 country code */
  getCountryImage(code){
    return images.countryImages[code.toLowerCase()];
  }

  getMetricImage(code) {
     // metric types are: list, map, line, bar, 
     if (code == 'percentage') {
      return require('../../images/percent-icon.png');
     } else if (code == 'speed') {
      return require('../../images/linegraph-icon.png');
     } else {
      return require('../../images/singledata-icon.png');
     }
   }; 

   getMarkerUnit(code, metric_name) {
    for (metric in this.state.metrics) {
      let metric_data = this.state.metrics[metric];
      let metric_id = metric_data.id;
      if (metric_id == code) {
        let metric_type = metric_data.type;
        if (metric_type == "percentage") {
          return "%";
        } else if (metric_type == "speed") {
          return " kbps";
        } else if (metric_type == "currency") {
          return "$";
        } else {
          return " ";
        } 
      }
    }
   };   

  getAllMarkers(code, metric_name) {
    this.state.markers = [];
    var id = 1;

    for (var country in Countries) {
      var current_country = Countries[country];
      var marker_description = "No statistics available";

      if (this.state.countryData[CountryToId[country]] && (this.state.countryData[CountryToId[country]])[code]) {
        marker_description = (this.state.countryData[CountryToId[country]])[code][0].value;
        marker_description = marker_description.toString();
        var marker_unit = this.getMarkerUnit(code, metric_name);
        if (marker_unit == "$") {
          marker_description = marker_unit + marker_description;
        } else {
          marker_description += marker_unit;
        }
        if ((this.state.countryData[CountryToId[country]])[code][0].type) {
          marker_description += ((this.state.countryData[CountryToId[country]])[code][0].value).toString();
        }

        var new_marker = {
          latlng: {latitude: current_country.lat, longitude: current_country.lng},
          title: marker_description,
          description: metric_name,
          id: id
        };

        id++;
        
        this.state.markers.push(new_marker);    
      }      
    }
  }

  render() {
    let img;  
    let metricList = [];
    if (this.state.isWorld) {
        img = images.worldMap;
        i = 0;
        for (metric in this.state.metrics) {
          i += 1;
          let metric_data = this.state.metrics[metric];
          let metric_short_name = metric.split(":")[0];
          let metric_full_name = metric_data.long_name;
          let metric_type = metric_data.type;
          let metric_id = metric_data.id;
          metricList.push(<Tile key = {i} titleText={metric_short_name} detailText={metric_full_name} figureText = '' tileType='data' imageDir={this.getMetricImage(metric_type)} isWorld={true} onPress={() => this.getAllMarkers(metric_id, metric_short_name)} />)
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
      }

      return (
        <View style={styles.container}>
          <TopBar title={''} back={false} />
            <Loading />
        </View>
      );
    } else {   
      img = this.getCountryImage(this.state.iso3Code);

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
          <Tile titleText='United States' tileType='data' imageDir={this.getCountryIcon('usa')} />
          <Tile titleText='Italy' tileType='country' imageDir={this.getCountryIcon('ita')} />
          <Tile titleText='Syria' tileType='data' imageDir={this.getCountryIcon('syr')} />
          <Tile titleText='Canada' tileType='country' imageDir={this.getCountryIcon('can')} />

          </View>
        </ScrollView>
        
        </View>
      );     
    }

    return (
      <View style={styles.container}>
      <TopBar title={this.state.title.toUpperCase()} back={this.props.back} />
      <View>
        <MapView style={styles.map}
            initialRegion={{
            latitude: 37.78825,
            longitude: -100.4324,
            latitudeDelta: 150,
            longitudeDelta: 150,
          }}>
          {this.state.markers.map(marker => (
              <MapView.Marker 
                key={marker.id}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                pinColor={'#000000'}
              />
          ))}
         </MapView>   
        </View>    
      <ScrollView >
        <View style={styles.scrollview}>
        { metricList }  
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
