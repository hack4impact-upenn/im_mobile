import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

// TODO: Replace hex codes with global veriables.  
export default StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
  },
  subTitleBlue: {
    color: '#3F51B5',
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 17,

  },
  subTitleGreen: {
    color: '#00838F',
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 17,

  },
  aboutTitle: {
    color: '#6A1B9A',
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 20,

  },
  subTitle: {
    color: '#9C27B0', 
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },
  listStuff: {
    paddingLeft: 35,
    paddingTop: 2,
    fontWeight: '200',
  },
  bodyText: {
    fontWeight: '200',
    paddingLeft: 12,
    paddingRight: 12,

  },
  bodyTextStandard: {
    fontWeight: '200',
    color: '#000000',
    
  },
  bodyText2: {
    paddingTop: 4,
    fontSize: 13,
    paddingLeft: 12,
    paddingRight: 12,
    color: '#4963CE'
  },
  bodyText3: {
    paddingTop: 4,
    fontSize: 13,
    paddingLeft: 12,
    paddingRight: 12,
    color: '#00ACC1'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
