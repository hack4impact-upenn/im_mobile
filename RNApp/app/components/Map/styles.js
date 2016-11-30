import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  tile: {
  	width: Dimensions.get('window').width * 0.8,
  	backgroundColor: 'powderblue',
  	height: 120,
  	margin:20,
  },
  map: {
  	backgroundColor: 'blue',
  	margin:20,
  	height: Dimensions.get('window').height * 0.4,
  	width: Dimensions.get('window').width * 0.8,
  },
});