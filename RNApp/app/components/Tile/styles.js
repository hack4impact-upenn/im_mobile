import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  // view properties
  tileWrapper: {
    margin: 15,
  },
  tile: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: colors.tileBackground,
    flexDirection: 'column',
    height: 150,
  },
  tileStrip: {
    backgroundColor: colors.tileMainText,
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
  },
  tileImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  // text properties
  titleText: {
    color: colors.tileMainText,
    fontSize: 18,
    fontWeight: '800',
  },
  figureText: {
    color: colors.tileSubText,
    fontSize: 30,
    fontWeight: '800',
  },
  detailText: {
    color: colors.tileSubText,
    fontSize: 12,
    fontWeight: '600',
  },
});
