import React from 'react';
import Component from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Tile from '../../components/Tile'
import styles from './styles';
import CountryCodes from './../../config/countryCodes';
import Countries from './../../config/countries';
import CountryToId from './../../config/countryToId';
import images from './../../config/images';


class Search extends React.Component {
// const Search = (props) => {
  constructor(props) {
  super(props);
  // const {handleSearchTermUpdateHa} = props;
  console.log("constructor called");
  this.state = {searchTerm: "", allTilesArr: []};
}

componentDidMount() {
    this.populateTiles(this.state.searchTerm);
}
  // console.log(this.state.searchTerm);

  populateTiles(searchTermVal) {
    this.setState({searchTerm: searchTermVal});

    var newArr = []

    var i;
    i = -1;

    if (searchTermVal == "") {
      for (var countryName in CountryToId){
        var countryCode = CountryToId[countryName];
        i = i + 1;
        newArr.push(
          <View key = {i}>
          <Tile titleText= {countryName} figureText= ' ' detailText= ' ' imageDir = {images.countryIcons[countryCode]} tileType= 'country'/>
          </View>
        );
      }
      this.setState({allTilesArr: newArr});

    } else {
      for (var countryName in CountryToId) {
        if (countryName.includes(searchTermVal)) {
            var countryCode = CountryToId[countryName];
            i = i + 1;
            newArr.push(
              <View key = {i}>
              <Tile titleText= {countryName} figureText= ' ' detailText= ' ' imageDir = {images.countryIcons[countryCode]} tileType= 'country'/>
              </View>
            );
        }
      }
      this.setState({allTilesArr: newArr});
    }
    this.forceUpdate();
  }


  handleSearchTermUpdate(searchTermVal) {
    this.populateTiles(searchTermVal);
  }

render() {
  return (
    <View style={styles.container}>
    <Header/>
    <ScrollView>
      <SearchBar updateSearchTerm={this.handleSearchTermUpdate.bind(this)}
      />
      	{this.state.allTilesArr}

	</ScrollView>

    </View>
  )
}
};

Search.propTypes = {
  onDetailsPress: React.PropTypes.func,
  handleSearchTermUpdateHa: React.PropTypes.func,
};

// Search.defaultProps = {
//   handleSearchTermUpdate: function(searchTermVal) {
//     console.log(searchTermVal);
//     this.state.searchTerm = searchTermVal;
//   },
// };

export default Search;
