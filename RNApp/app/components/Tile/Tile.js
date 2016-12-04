import React from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';

// the different tile types
const tileTypes = {
  data: 0,
  country: 1,
  world: 2,
}
// return the styling for the given type
function tileColor(type) {
  // order corresponds to indices of tileTypes
  let mainColors = ['#0D47A1', '#D84315', '#009688'];
  let subColors = ['#64B5F6', '#FFAB91', '#80CBC4'];
  return {main: mainColors[type], subt: subColors[type]};
}

const Tile = (props) => {
  const { titleText, figureText, detailText, imageDir, tileType,
    onPress } = props;
  // set up the picture
  let pic = {
      uri: imageDir
  };
  // set up the color of the tile
  let color = tileColor(tileType);
  return (
    <TouchableOpacity style={styles.tileWrapper} onPress={onPress}>
      {/* main tile view */}
      <View style={styles.tile}>
        <View style={styles.titleTextView}>
          {/* the title e.g. "USAGE IN IRAN"*/}
          <Text style={[styles.titleText, {color: color.main}]}>
            {titleText}
          </Text>
        </View>
        <View style={styles.tileBody}>
          {/* detail and figure (e.g. 53% of users of internet) */}
          <View style={styles.tileTextView}>
            <Text style={[styles.figureText, {color: color.subt}]}>
              {figureText}
            </Text>
            <Text style={[styles.detailText, {color: color.subt}]}>
              {detailText}
            </Text>
          </View>
          {/* tile image (e.g. map of Iran) */}
          <View style={styles.tileImageView}>
            <Image source={pic} style={styles.tileImage}/>
          </View>
        </View>
      </View>
      {/* the strip at the bottom */}
      <View style={[styles.tileStrip, {backgroundColor: color.main}]} />
    </TouchableOpacity>
  );
};

Tile.propTypes = {
  titleText: React.PropTypes.string,
  figureText: React.PropTypes.string,
  detailText: React.PropTypes.string,
  imageDir: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

Tile.defaultProps = {
  titleText: 'CONTROL IN IRAN',
  figureText: '25%',
  detailText: 'IP addresses per point of control',
  imageDir: 'https://www.breitling.com/bundles/breitlingretailers/images/maps/IR.png',
  // eslint-disable-next-line no-console
  tileType: tileTypes.world,
  onPress: () => console.log('Button Pressed'),
};

export default Tile;
