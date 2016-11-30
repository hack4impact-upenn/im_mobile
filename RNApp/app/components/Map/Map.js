import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions} from 'react-native';
import styles from './styles';

//TODO: fill in tile, topbar, bottombar components
//      figure out how to import image for the map
//      click navigation (back button, etc)
const Map = (props) => {
  const {country} = props;
  return (
    <ScrollView >
        <View style={styles.topbar}>
          <View style={styles.back} />
          <View style={styles.topbarTextWrapper}> 
            <Text style={styles.topbarText}>{country}</Text>
          </View>
        </View>

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
