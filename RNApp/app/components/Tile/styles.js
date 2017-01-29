import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

// The different tile types
export const tileTypes = {
  'data': 0,
  'country': 1,
  'world': 2,
}

// The colors for the various tile types
export const tileColors = {
  main: {
    'data': '#0D47A1',
    'country': '#D84315',
    'world': '#009688',
  },
  subtext: {
    'data': '#64B5F6',
    'country': '#FFAB91',
    'world': '#80CBC4',
  }
}

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
  tileImage: {
    flex: 1,
    resizeMode: 'contain',
    height: 110,
    width: 110,
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
    fontSize: 30,
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
