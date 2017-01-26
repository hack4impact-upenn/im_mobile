import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Tile from '../../components/Tile'
import styles from './styles';
import CountryCodes from './../../config/countryCodes';
import CountryToId from './../../config/countryToId';
import images from './../../config/images';

const Search = (props) => {

   var allTilesArr = [];
   var i;
   i = -1;
    for (var countryName in CountryToId){
      var countryCode = CountryToId[countryName];
      
      	i = i + 1;
  		allTilesArr.push(
   			<View key = {i}>
  			<Tile titleText= {countryName} figureText= ' ' detailText= ' ' imageDir = {images.countryIcons[countryCode]} tileType= 'country'/> 
 			</View>
  		);
  		
 	}
 
  return (
    <View style={styles.container}>
    <Header/>
    <ScrollView>

      <SearchBar
      />
      	{allTilesArr}

	</ScrollView>
  
    </View>
  );
};

Search.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Search;
