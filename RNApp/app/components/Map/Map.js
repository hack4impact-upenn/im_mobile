import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import styles from './styles';

//TODO: fill in tile, topbar, bottombar components
//      figure out how to import image for the map
//      back button component
const Map = (props) => {
  const {country} = props;
  return (
    <View style={styles.container}>
       <View style={styles.topbar}>
          <TouchableOpacity style={styles.back} /> 
          <View style={styles.topbarTextWrapper}> 
            <Text style={styles.topbarText}>{country}</Text>
          </View>
        </View>
    <ScrollView  >
      <View style={styles.scrollview}>
        <View style={styles.map}>
           <Image style ={styles.mapImg}
            source={{uri:'https://thenetmonitor.org/countries/usa/thumb'}}
            />
        </View>
        <View style={styles.tile} />
        <View style={styles.tile} />
        <View style={styles.tile} />
        <View style={styles.tile} />
      </View>
    </ScrollView>
    
    </View>
  );
};


export default Map;
