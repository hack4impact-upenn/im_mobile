import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../config/styles';

const size = 35;
export default StyleSheet.create({
  logo: {
  	flex: 0,
  	width: size,
    height: size,
  },
  logoText: {
    flex: 0,
  	fontSize: 30,
  	fontWeight: 'bold',
  	color:colors.logoText,
  	textAlign:'center',
  	fontFamily: fonts.titleFont,
    width:300,
    alignSelf: 'center'
  },
  headerWrapper: {
  	flex: 0,
  	paddingVertical: 30,
  	flexDirection: 'row',
  	width: Dimensions.get('window').width,
  	alignItems: 'center',
  	backgroundColor: colors.logoBackground,
  	height: 75,
    justifyContent: 'center'
  }
});
