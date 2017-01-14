import React from 'react';
import { Text, TextInput } from 'react-native';
import styles from './styles';


const SearchBar = (props) => {
  const { onChange } = props;
  this.state = {text: ""};
  return (
    <TextInput style={styles.searchBar} placeholder="Search"
    placeholderTextColor='#686868' underlineColorAndroid='#FFFFFF'
    onChangeText={onChange}>
    </TextInput>
  );
};

SearchBar.propTypes = {
  onChange: React.PropTypes.func,
};

SearchBar.defaultProps = {
  onChange: (text) => {
    this.state.text = (sanitizeString(text));
    console.log(this.state.text);},
};

export default SearchBar;

function sanitizeString(str){
    str = str.replace(/[^a-záéíóúñü]/gim,"");
    return str.trim().toLowerCase();
}
