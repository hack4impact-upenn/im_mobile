import React from 'react';
import MapView from '../routes/MapView';
import Geolocator from '../routes/Geolocator';
import Search from '../routes/Search';
import About from '../routes/About';

export const routes = {
   getSearchRoute() {
    return {
      renderScene(navigator) {
        return <Search navigator={navigator} />;
      },

      getTitle() {
        return 'Search';
      },
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
    };
  },
  getGeolocationRoute() {
    return {
      renderScene(navigator) {
        return <Geolocator navigator={navigator} />;
      },

      getTitle() {
        return 'Geolocator';
      },
    };
  },
};

export default routes;
