import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.buttonBackground,
    margin: 5,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '500',
  },
  titleText: {
    color: colors.buttonText,
    fontSize: 26,
    fontWeight: '500',
  },
  figureText: {
    color: colors.buttonText,
    fontSize: 30,
    fontWeight: '500',
  },
});
