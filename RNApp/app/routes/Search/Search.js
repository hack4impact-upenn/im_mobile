import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Tile from '../../components/Tile'
import styles from './styles';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import CountryToId from './../../config/countryToId';




const Search = (props) => {

	const getImageDir = (code) => {
    return 'https://raw.githubusercontent.com/hack4impact/berkman/add-images/' +
      'RNApp/app/images/country-icons/'+code.toLowerCase()+'.png';
  };

   var allTilesArr = [];
   var i;
   i = -1;
    for (var countryName in CountryToId){
      var ccode = CountryToId[countryName];
      
      	i = i + 1;
  		allTilesArr.push(
   			<View key = {i}>
  			<Tile titleText= {countryName} figureText= ' ' detailText= ' ' imageDir = {getImageDir(ccode)} tileType= 'country'/> 
 			</View>
  		);
  		
 	}
 
  return (
    <View style={styles.container}>

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
