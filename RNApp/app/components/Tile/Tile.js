import React from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import { tileTypes, tileColors } from './styles';
import styles from './styles';
import images from './../../config/images';
import Routes from '../../config/routes';

const Tile = (props) => {
  const { titleText, figureText, detailText, image, tileType,
    onPress, navigator } = props;

  var navigate = () => {
      props.navigator.push(Routes.getCountryRoute(props.titleText));
  }

  return (
    <TouchableOpacity style={styles.tileWrapper} onPress={navigate}>
      {/* Main tile view */}
      <View style={styles.tile}>
        <View style={styles.titleTextView}>
          {/* The title e.g. "USAGE IN IRAN"*/}
          <Text style={[styles.titleText,
            {color: tileColors.main[tileType]}]}>
            {titleText}
          </Text>
        </View>
        <View style={styles.tileBody}>
          {/* Detail and figure (e.g. 53% of users of internet) */}
          <View style={styles.tileTextView}>
            <Text style={[styles.figureText,
              {color: tileColors.subtext[tileType]}]}>
              {figureText}
            </Text>
            <Text style={[styles.detailText,
              {color: tileColors.subtext[tileType]}]}>
              {detailText}
            </Text>
          </View>
          {/* Tile image (e.g. map of Iran) */}
          <View style={styles.tileImageView}>
            <Image
              source={props.imageDir}
              style={[styles.tileImage,
                {tintColor: tileColors.main[tileType]}]}
            />
          </View>
        </View>
      </View>
      {/* The strip at the bottom */}
      <View style={[styles.tileStrip,
        {backgroundColor: tileColors.main[tileType]}]} />
    </TouchableOpacity>
  );
};

Tile.propTypes = {
  titleText: React.PropTypes.string,
  figureText: React.PropTypes.string,
  detailText: React.PropTypes.string,
  image: React.PropTypes.number,
  tileType: React.PropTypes.string,
  onPress: React.PropTypes.func,
  navigator: React.PropTypes.object,
};

// TODO: replace with different default values
Tile.defaultProps = {
  titleText: 'CONTROL IN IRAN',
  figureText: '25%',
  detailText: 'IP addresses per point of control',
  image: images.countryIcons.usa,
  // eslint-disable-next-line no-console
  tileType: 'data',
  onPress: () => console.log("Button Pressed"),
};

export default Tile;
