import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Tile = (props) => {
  const { titleText, figureText, detailText, imageDir, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>
        {text}
      </Text>
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
  imageDir: '',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Button Pressed'),
};

export default Tile;
