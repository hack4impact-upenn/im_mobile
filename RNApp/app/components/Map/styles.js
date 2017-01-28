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
    flex: 1,
  	alignSelf: 'stretch',
  	margin: 20,
  	marginLeft: 10,
  	marginRight: 10,
    alignItems: 'center',
    height: 300
  },
  mapImg:{
    flex: 1,
    resizeMode: 'contain',
  	height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },  
});