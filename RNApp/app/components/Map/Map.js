import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions} from 'react-native';
import styles from './styles';

const Map = (props) => {
  const {text} = props;
  return (
    <ScrollView >

      <View style={styles.container}>

        <View style={styles.map} />
        <View style={styles.tile} />
        <View style={styles.tile} />
        <View style={styles.tile} />
        <View style={styles.tile} />

       </View>

    </ScrollView>
  );
};


export default Map;
