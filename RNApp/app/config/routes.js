import React from 'react';
import MapView from '../routes/MapView';
import Geolocator from '../routes/Geolocator';
import Search from '../routes/Search';
import About from '../routes/About';
import Map from '../components/Map';
import CountryToId from './countryToId';
import CountryCodes from './countryCodes';

export const routes = {
   getSearchRoute() {
    return {
      renderScene(navigator) {
        return <Search navigator={navigator} />;
      },

      getTitle() {
        return 'Search';
      },

      showNavigationBar: false,
    };
  },
  getMapViewRoute(props) {
    return {
      renderScene(navigator) {
        return <MapView country={props.country} back={props.back} navigator={navigator} />;
      },

      getTitle() {
        return 'Internet Monitor';
      },

      showNavigationBar: false,
    };
  },
  getAboutRoute() {
    return {
      renderScene(navigator) {
        return <About navigator={navigator} />;
      },

      getTitle() {
        return 'About';
      },

      showNavigationBar: false,
    };
  },
  getGeolocationRoute(countryName) {
    return {
      renderScene(navigator) {
        return <Geolocator navigator={navigator} currentCountry={"Iran"} countryCode={"IR"}/>;
      },

      getTitle() {
        return 'Geolocator';
      },

      showNavigationBar: false,
    };
  },
  getCountryRoute(countryName) {
    countryIso3Code = CountryToId[countryName].toUpperCase();
    var countryIso2Code = "";

    for (code in CountryCodes) {
      if (CountryCodes[code] == countryIso3Code) {
        countryIso2Code = code;
      }
    }
    return {
      renderScene(navigator) {
        return <MapView navigator={navigator} country={countryName} iso2Code={countryIso2Code} back={true}/>;
      },

      getTitle() {
        return 'Country';
      },

      showNavigationBar: false,
    };
  },
};

export default routes;
