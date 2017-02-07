import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  subTitleBlue: {
    color: colors.about.subTitleBlue,
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 17,
  },
  subTitleGreen: {
    color: colors.about.subTitleGreen,
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 17,
  },
  aboutTitle: {
    color: colors.about.aboutTitle,
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    color: colors.about.subTitle,
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
    color: colors.about.bodyTextStandard,
  },
  bodyText2: {
    paddingTop: 4,
    fontSize: 13,
    paddingLeft: 12,
    paddingRight: 12,
    color: colors.about.bodyText2,
  },
  bodyText3: {
    paddingTop: 4,
    fontSize: 13,
    paddingLeft: 12,
    paddingRight: 12,
    color: colors.about.bodyText3,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: colors.about.instructions,
    marginBottom: 5,
  },
});
