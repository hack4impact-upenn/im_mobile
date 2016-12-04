import React from 'react';
import { Text, TextInput } from 'react-native';
import styles from './styles';


const SearchBar = (props) => {
  const { text, onSubmit } = props;
  return (
    <TextInput style={styles.searchBar} placeholder="Search"
    placeholderTextColor='#686868' underlineColorAndroid='#FFFFFF'
    onSubmitEditing = {onSubmit}>
    </TextInput>
  );
};

SearchBar.propTypes = {
  text: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
};

SearchBar.defaultProps = {
  text: 'Search',
  onSubmit: () => console.log('Search Field Submitted'),
};

export default SearchBar;
