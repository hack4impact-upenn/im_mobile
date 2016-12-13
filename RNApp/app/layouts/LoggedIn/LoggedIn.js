import React from 'react';
import { Image, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';
import Map from './../../components/Map';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Globe',
    };
  }

  renderTabItem(title, initialRoute, Icon) {
    const { selectedTab } = this.state;
    const sceneStyle = [];
    if (initialRoute.showNavigationBar !== false) {
      sceneStyle.push({ paddingTop: 64 });
    }

    return (
      <TabNavigator.Item
        selected={selectedTab === title}
        renderIcon={() => <Image style={styles.icon} source={Icon} />}
        renderSelectedIcon={() => (
          <Image
            style={[styles.icon, styles.iconSelected]}
            source={Icon}
          />
        )}
        onPress={() => this.setState({ selectedTab: title })}
      >
        <ExNavigator
          initialRoute={initialRoute}
          style={{ flex: 1 }}
          sceneStyle={sceneStyle}
          showNavigationBar={initialRoute.showNavigationBar}
        />
      </TabNavigator.Item>
    );
  }

  // TODO: Replace routes with actual routes
  render() {
    return (
      <TabNavigator>
        {this.renderTabItem('Globe', Routes.getHomeRoute(), images.icons.globe)}
        {this.renderTabItem('Map', Routes.getProfileRoute(), images.icons.geolocation)}
        {this.renderTabItem('Search', Routes.getSearchRoute(), images.icons.search)}
        {this.renderTabItem('About', Routes.getProfileRoute(), images.icons.about)}
        {this.renderTabItem('Globe', Routes.getMapViewRoute({country: 'THE WORLD', back: false}), images.icons.globe)}
        {this.renderTabItem('Map', Routes.getGeolocationRoute(), images.icons.geolocation)}
        {this.renderTabItem('Search', Routes.getProfileRoute(), images.icons.search)}
        {this.renderTabItem('About', Routes.getAboutRoute(), images.icons.about)}
      </TabNavigator>
    );
  }
}

export default LoggedIn;
