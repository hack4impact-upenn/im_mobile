import React from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';

const Tile = (props) => {
  const { titleText, figureText, detailText, imageDir, onPress } = props;
  let pic = {
      uri: imageDir
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={{flex: 1, flexDirection: 'column', height: 120}}>
        <View style={{flex: 2}}>
          <Text style={styles.titleText}>
            {titleText}
          </Text>
        </View>
        <View style={{flex: 4, flexDirection: 'row'}}>
          <View style={{flex: 3, flexDirection: 'column'}}>
            <Text style={styles.figureText}>
              {figureText}
            </Text>
            <Text style={styles.buttonText}>
              {detailText}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Image source={pic} style={{width: 50, height: 50}}/>
          </View>
        </View>
      </View>
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
  titleText: 'Control in the middle east',
  figureText: '25%',
  detailText: 'Individuals using the internet',
  imageDir: 'https://www.breitling.com/bundles/breitlingretailers/images/maps/IR.png',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Button Pressed'),
};

export default Tile;
