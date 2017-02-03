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
    zIndex:0,
  },
  topbarTextWithBack: {
    marginLeft: 10,
  },
  topbarTextWrapper: {
  	flex:0,
  	width:Dimensions.get('window').width,
  	alignItems:'center',
  },
  back: {
    position:'absolute',
  	backgroundColor: colors.countryMain,
  	alignSelf:'flex-start',
  	width:50,
  	height:50,
    alignItems: 'center',
    top: -10,
    justifyContent:'center',
    zIndex: 1,

  },
  backArrow: {
    tintColor: 'white',
    zIndex:1,
    width:40,
    height:40,
    top:0,
    left:0,
  }
});