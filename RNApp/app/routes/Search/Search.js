import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Tile from '../../components/Tile'
import styles from './styles';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import CountryToId from './../../config/countryToId';
import images from './../../config/images';



const Search = (props) => {

  this.state = {text: "Un"};
  searchTerm = this.state.text;

   var allTilesArr = [];
   var i;
   i = -1;

   if (searchTerm == "") {
     for (var countryName in CountryToId){
       var countryCode = CountryToId[countryName];
       i = i + 1;
       allTilesArr.push(
         <View key = {i}>
         <Tile titleText= {countryName} figureText= ' ' detailText= ' ' imageDir = {images.countryIcons[countryCode]} tileType= 'country'/>
         </View>
       );
     }

   } else {
     for (var countryName in CountryToId) {
       console.log(countryName);
       if (countryName.startsWith(searchTerm)) {
         var countryCode = CountryToId[countryName];
         i = i + 1;
         allTilesArr.push(
           <View key = {i}>
           <Tile titleText= {countryName} figureText= ' ' detailText= ' ' imageDir = {images.countryIcons[countryCode]} tileType= 'country'/>
           </View>
         );
       }
     }

   }

  //  for (var countryName in CountryToId){
  //    var countryCode = CountryToId[countryName];
  //    i = i + 1;
  //    allTilesArr.push(
  //      <View key = {i}>
  //      <Tile titleText= {countryName} figureText= ' ' detailText= ' ' imageDir = {images.countryIcons[countryCode]} tileType= 'country'/>
  //      </View>
  //    );
  //  }

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
