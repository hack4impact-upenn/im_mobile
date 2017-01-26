import React from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import LineGraph from './../LineGraph';
import { tileTypes, tileColors } from './styles';
import styles from './styles';
import images from './../../config/images';

const Tile = (props) => {
  const { titleText, figureText, detailText, image, tileType,
    onPress, containsGraph, data } = props;
  return (
    <TouchableOpacity style={styles.tileWrapper} onPress={onPress}>
      {/* Main tile view */}
      <View style={[styles.tile, containsGraph ? styles.withGraph : styles.noGraph]}>
        <View style={styles.titleTextView}>
          {/* The title e.g. "USAGE IN IRAN"*/}
          <Text style={[styles.titleText,
            {color: tileColors.main[tileType]}]}>
            {titleText}
          </Text>
        </View>
        {containsGraph && <LineGraph data={data} />}
        {!containsGraph &&
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
        }
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
  containsGraph: React.PropTypes.bool,
  data: React.PropTypes.array,
};

// TODO: replace with different default values
Tile.defaultProps = {
  titleText: 'CONTROL IN IRAN',
  figureText: '25%',
  detailText: 'IP addresses per point of control',
  image: images.countryIcons.usa,
  // eslint-disable-next-line no-console
  tileType: 'data',
  onPress: () => console.log('Button Pressed'),
  containsGraph: false,
  data: [],
};

export default Tile;
