import React, {Component, PropTypes } from 'react';
import MapView from 'react-native-maps';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import LineGraph from './../LineGraph';
import CountryCodes from './../../config/countryCodes';
import CountryToId from './../../config/countryToId';
import Countries from './../../config/countries';
import Loading from './../Loading';
import images from './../../config/images';
import { getCountryIndicators, getIndicatorInfo } from './../../backend/indicators';
import { getMetricsList } from './../../backend/tempBackend';
import { StockLine } from 'react-native-pathjs-charts';

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
      indicatorInfo: {},
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
      this.makeRequest(CountryToId[nextProps.country], CountryCodes[nextProps.iso2Code.toUpperCase()], nextProps.country);
    }
  }

  /* 
  Makes request to the Berkman API given an ISO3 country code
  If successful, updates the state and returns the 'data' part of the country's JSON
  */

  async makeCountryDataRequest(countryCode) {
      console.log('Making request: makeCountryDataRequest');
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

  async makeRequest(countryCode, new_iso3Code, new_title) {
      console.log('Making request: makeRequest');
    const countryEndpt = 'https://thenetmonitor.org/v2/countries/';
    let countryRequestUrl = countryEndpt + countryCode;
    const indicatorRequestUrl = 'https://thenetmonitor.org/v2/indicators';
    // let data = '';
    try {
      let countryResponse = await fetch(countryRequestUrl);
      let countryJson = await countryResponse.json();
      this.state.indicators = getCountryIndicators(countryJson);

      let indicatorResponse = await fetch(indicatorRequestUrl);
      let indicatorJson = await indicatorResponse.json();
      this.state.indicatorInfo = getIndicatorInfo(indicatorJson, this.state.indicators);

      this.setState({
        isLoading: false,
        title: new_title,
        iso3Code: new_iso3Code,
        isWorld: false
      });

      return countryJson['data'];
    } catch(error) {
      console.error(error);
    }
  }

  async makeIndicatorRequest() {
      console.log('made reques: makeIndicatorRequest');
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
    this.forceUpdate(); // Rerender map
  }

  render() {
    let img;  
    let metricList = [];
    if (this.state.isWorld) {
        this.state.title = this.props.country;
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
      
      if (this.props.back) {
        // Country view via search tile
        this.makeRequest(CountryToId[this.props.country], CountryCodes[this.props.iso2Code.toUpperCase()], this.props.country);
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
        var tiles = []; // this is the list of components to be displayed

        var allData = this.state.indicators;

        for (let indic in allData) {
          // iterate through all indicators for the country
          var indicData = allData[indic];
          // sort the given indicator by date
          indicData.sort(function (data1, data2) {
            // comparator for dates
            var date1 = data1['date'];
            var date2 = data2['date'];
            if (Date.parse(date1) < Date.parse(date2)) {
              return -1;
            }
            else if (Date.parse(date1) > Date.parse(date2)) {
              return 1;
            }
            else {
              return 0;
            }
          });
          var percentage = this.state.indicatorInfo[indic]['isPercentage'];
          if (indicData.length > 4) {
            // there are more than 4 data points - display in a line graph
            tiles.push(
              <Tile key={indic}
                titleText={this.state.indicatorInfo[indic]['title']}
                tileType='data'
                data={indicData}
                containsGraph={true} />
            );
          } else if (percentage) {
            // fewer than 4 data points, but a percentage
            var dataPoint = indicData[indicData.length - 1];
            var dateText = (new Date(dataPoint.date)).toDateString().slice(4);
            tiles.push(
                <Tile key={indic}
                  titleText={this.state.indicatorInfo[indic]['title']}
                  percentage={Number(dataPoint.value.toPrecision(3))}
                  tileType='data'
                  imageDir={this.getCountryIcon(this.state.iso3Code)}
                  containsPercentage={true}
                  detailText={dateText}/>
            );
          } else {
            // if there are fewer than 4 data points, just display most recent
            var dataPoint = indicData[indicData.length - 1];
            var dateText = (new Date(dataPoint.date)).toDateString().slice(4);
            tiles.push(
                <Tile key={indic}
                  titleText={this.state.indicatorInfo[indic]['title']}
                  tileType='data'
                  imageDir={this.getCountryIcon(this.state.iso3Code)}
                  figureText={dataPoint.value.toString()}
                  detailText={dateText}/>
            );
          }
        }

        return (
          <View style={styles.container}>
          <TopBar title={this.state.title.toUpperCase()} back={this.props.back} navigator={this.props.navigator} />
          <ScrollView>
            <View style={styles.scrollview}>
              <View style={styles.map}>
                 <Image style ={styles.mapImg}
                  source={img}
                  />
              </View>
            {/* TODO: Load tiles with data */}
            {/* TODO: Replace country code with corresponding data country code */}
            {tiles}
            </View>
          </ScrollView>

          </View>
        ); 
    }
  }
};

Map.propTypes = {
  country: React.PropTypes.string,
  iso2Code: React.PropTypes.string,
  back: React.PropTypes.bool,
  navigator: React.PropTypes.object,
};

export default Map;
