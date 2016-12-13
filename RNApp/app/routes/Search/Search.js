import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const Search = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Search
      </Text>
      <Button
        text="Details"
        onPress={props.onDetailsPress}
      />
    </View>
  );
};

Search.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Search;


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

