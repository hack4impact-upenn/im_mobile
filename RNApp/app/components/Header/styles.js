import { StyleSheet, Dimensions } from 'react-native';

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
  	color:'#424242',
  	textAlign:'center',
  	fontFamily: 'Oswald-Regular',
    width:300,
    alignSelf: 'center'
  },
  headerWrapper: {
  	flex: 0,
  	paddingVertical: 30,
  	flexDirection: 'row',
  	width: Dimensions.get('window').width,
  	alignItems: 'center',
  	backgroundColor: '#FFFFFF',
  	height: 75,
    justifyContent: 'center'
  }
});
