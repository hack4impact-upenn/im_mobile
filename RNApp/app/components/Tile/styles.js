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
  worldTile: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    height: 130,  
    },
  noGraph: {
    height: 150,
  },
  withGraph: {
    height: 400,
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
  tileWorldImage: {
    flex: 1,
    resizeMode: 'contain',
    height: 70,
    width: 70,
    paddingBottom: 5
  },
  tileImage: {
    flex: 1,
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
  percentageData: {
    flexDirection: 'row',
    marginLeft: 7,
    marginRight: 7,
  },
  percentageBar: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 5
  },
  percentageBarFull: {
    height: 35,
  },
  percentageBarEmpty: {
    height: 35,
    backgroundColor: '#e5e3e3',
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
  percentageText: {
    fontSize: 26,
    fontWeight: '800',
    marginRight: 7,
    flex: 2,
    textAlign: 'right',
  },
  detailText: {
    fontSize: 12,
    fontWeight: '600',
  },
  detailPercentageText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 7
  }
});
