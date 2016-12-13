import React from 'react';
import Home from '../routes/Home';
import Search from '../routes/Search';
import About from '../routes/About';
import Details from '../routes/Details';
import Profile from '../routes/Profile';
import SignIn from '../routes/SignIn';
import MapView from '../routes/MapView';
import Geolocator from '../routes/Geolocator';

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
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

      getTitle() {
        return 'Home';
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
  getDetailsRoute() {
    return {
      renderScene(navigator) {
        return <Details navigator={navigator} />;
      },

      getTitle() {
        return 'Details';
      },
    };
  },
  getProfileRoute() {
    return {
      renderScene(navigator) {
        return <Profile navigator={navigator} />;
      },

      showNavigationBar: false,
    };
  },
  getSignInRoute() {
    return {
      renderScene(navigator) {
        return <SignIn navigator={navigator} />;
      },

      showNavigationBar: false,
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
