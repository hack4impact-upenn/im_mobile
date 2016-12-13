import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container:{
		flex: 1,
	},
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  topbar: {
  	flex: 0,
  	flexDirection:'row',
  	width: Dimensions.get('window').width,
    alignItems: 'center',
  	backgroundColor: colors.countryMain,
  	height: 50,
  },
  topbarText: {
	fontSize: 25,
  	fontWeight:'bold',
  	color:'white',
  	textAlign:'center',
  },
  topbarTextWrapper: {
  	flex: 0,
  	width: Dimensions.get('window').width,
  	alignItems: 'center'
  },
  back: {
  	position: 'absolute',
  	backgroundColor: colors.countryArrow,
  	alignSelf: 'flex-start',
  	width: 50,
  	height: 50,
  },
  map: {
  	alignSelf: 'stretch',
  	margin: 20,
  	marginLeft: 30,
  	marginRight: 30,
  },
  mapImg:{
  	height: Dimensions.get('window').height * 0.4,
  }
});