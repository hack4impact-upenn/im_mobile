import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  searchBar: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.searchBarBackground,
    margin: 5,
    width: 364,
    height: 50,
    justifyContent: 'center'
  },
  searchBarText: {
    color: colors.searchBarText,
    fontSize: 16,
    fontWeight: '500',
  },
});
