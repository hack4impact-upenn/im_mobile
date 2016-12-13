import React from 'react';
import Home from '../routes/Home';
import Search from '../routes/Search';
import Details from '../routes/Details';
import Profile from '../routes/Profile';
import SignIn from '../routes/SignIn';

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
};

export default routes;
