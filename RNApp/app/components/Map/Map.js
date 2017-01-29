import React, {Component, PropTypes } from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';
import TopBar from './../TopBar';
import Tile from './../Tile';
import LineGraph from './../LineGraph';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import Loading from './../Loading';
import images from './../../config/images';
import { getCountryIndicators, getIndicatorInfo } from './../../backend/indicators';
import { StockLine } from 'react-native-pathjs-charts';


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      title: '',
      iso3Code: '',
      indicators: {},
      indicatorInfo: {},
      isWorld: (this.props.country == 'THE WORLD'),
    };
  }

  /*
  Makes request to the Berkman API given an ISO3 country code
  If successful, updates the state and returns the 'data' part of the country's JSON
  */
  async makeRequest(countryCode) {
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
        title: countryJson['data']['attributes']['name']
      });

      console.log(this.state.indicators);
      console.log(this.state.indicatorInfo);

      return countryJson['data'];
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
            console.log(dataPoint.value);
            tiles.push(
                <Tile key={indic}
                  titleText={this.state.indicatorInfo[indic]['title']}
                  percentage={Number(dataPoint.value.toPrecision(3))}
                  tileType='country'
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
                  tileType='world'
                  imageDir={this.getCountryIcon(this.state.iso3Code)}
                  figureText={dataPoint.value.toString()}
                  detailText={dateText}/>
            );
          }
        }
    }
    return (
      <View style={styles.container}>
      <TopBar title={this.state.title.toUpperCase()} back={this.props.back} />
      <ScrollView>
        <View style={styles.scrollview}>
          <View style={styles.map}>
             <Image style ={styles.mapImg}
              source={img}
              />
          </View>
        {/* TODO: Load tiles with data */}
        {/* TODO: Replace country code with corresponding data country code */}
        {!this.state.isWorld && tiles}
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
