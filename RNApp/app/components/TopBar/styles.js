import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
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
  topbarTextWithBack: {
    marginLeft: 25,
  },
  topbarTextWrapper: {
  	flex:0,
  	width:Dimensions.get('window').width,
  	alignItems:'center',
  },
  back: {
  	position:'absolute',
  	backgroundColor: colors.countryArrow,
  	alignSelf:'flex-start',
  	width:50,
  	height:50,
    top:-10,
  },

});