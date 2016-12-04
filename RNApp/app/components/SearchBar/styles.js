import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  searchBar: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: colors.searchBarBackground,
    margin: 5,
  },
  searchBarText: {
    color: colors.searchBarText,
    fontSize: 16,
    fontWeight: '500',
  },
});
