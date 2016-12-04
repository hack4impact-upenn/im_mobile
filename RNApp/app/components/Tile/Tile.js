import React from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import { tileTypes, tileColors } from './styles';
import styles from './styles';

const Tile = (props) => {
  const { titleText, figureText, detailText, imageDir, tileType,
    onPress } = props;
  // Set up the picture
  let pic = {
      uri: imageDir
  };
  return (
    <TouchableOpacity style={styles.tileWrapper} onPress={onPress}>
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
            <Image source={pic} style={styles.tileImage}/>
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
  imageDir: React.PropTypes.string,
  tileType: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

// TODO: replace with different default values
Tile.defaultProps = {
  titleText: 'CONTROL IN IRAN',
  figureText: '25%',
  detailText: 'IP addresses per point of control',
  imageDir: 'https://www.breitling.com/bundles/breitlingretailers/images/maps/IR.png',
  // eslint-disable-next-line no-console
  tileType: 'data',
  onPress: () => console.log('Button Pressed'),
};

export default Tile;
