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
