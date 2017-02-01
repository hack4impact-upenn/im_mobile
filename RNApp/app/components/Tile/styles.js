import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

// The different tile types
export const tileTypes = {
  'data': 0,
  'country': 1,
  'world': 2,
}

// The colors for the various tile types
export const tileColors = colors.tiles;

export default StyleSheet.create({
  // view properties
  tileWrapper: {
    margin: 15,
  },
  tile: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    height: 150,
  },
  tileStrip: {
    height: 8,
  },
  titleTextView: {
    flex: 1,
    padding: 5,
  },
  tileBody: {
    flex: 3,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  tileTextView: {
    flex: 2,
    flexDirection: 'column',
  },
  tileImageView: {
    flex: 1,
    padding: 5,
    alignItems:'center',
    justifyContent:'center',
  },
  tileImage: {
    flex: 1,
    resizeMode: 'contain',
    height: 110,
    width: 110,
  },
  // Text properties
  titleText: {
    fontSize: 18,
    fontWeight: '800',
  },
  figureText: {
    fontSize: 30,
    fontWeight: '800',
  },
  detailText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
