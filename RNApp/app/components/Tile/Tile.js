import React from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';

const Tile = (props) => {
  const { titleText, figureText, detailText, imageDir, onPress } = props;
  let pic = {
      uri: imageDir
  };
  return (
    <TouchableOpacity style={styles.tileWrapper} onPress={onPress}>
      <View style={styles.tile}>
        <View style={styles.titleTextView}>
          <Text style={styles.titleText}> {titleText} </Text>
        </View>
        <View style={styles.tileBody}>
          <View style={styles.tileTextView}>
            <Text style={styles.figureText}> {figureText} </Text>
            <Text style={styles.detailText}> {detailText} </Text>
          </View>
          <View style={styles.tileImageView}>
            <Image source={pic} style={styles.tileImage}/>
          </View>
        </View>
      </View>
      <View style={styles.tileStrip} />
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
  onPress: () => console.log('Button Pressed'),
};

export default Tile;
