import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  topbar: {
  	flex: 0,
  	flexDirection:'row',
  	width: Dimensions.get('window').width,
    alignItems: 'center',
  	backgroundColor: 'red',
  	height: 50,
  },
  topbarText: {
	fontSize: 25,
  	fontWeight:'bold',
  	color:'white',
  	textAlign:'center',
  },
  topbarTextWrapper: {
  	flex:0,
  	width:Dimensions.get('window').width,
  	alignItems:'center'
  },
  back: {
  	position:'absolute',
  	backgroundColor: 'orange',
  	alignSelf:'flex-start',
  	width:50,
  	height:50,
  },
  tile: {
  	alignSelf:'stretch',
  	backgroundColor: 'powderblue',
  	height: 120,
  	margin:20,
  	marginLeft: 30,
  	marginRight:30,
  },
  map: {
  	alignSelf:'stretch',
  	backgroundColor: 'blue',
  	margin:20,
  	marginLeft: 30,
  	marginRight:30,
  	height: Dimensions.get('window').height * 0.4,
  },
});