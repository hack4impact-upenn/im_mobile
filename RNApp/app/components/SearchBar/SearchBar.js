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
    //remove all characters except alphabetic chars and spaces
    str = str.replace(/[^a-z ]/gim,"");

    //replace spaces with a single space
    str = str.replace(/  +/g, ' ');

    //trim spaces before and after characters
    str = str.trim().toLowerCase();

    //change first letter after spaces to uppercase
    str = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    return str;
}
