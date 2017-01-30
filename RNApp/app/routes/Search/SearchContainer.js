import React from 'react';
import Search from './Search';
import Routes from '../../config/routes';

const SearchContainer = (props) => {
  return (
    <Search
      navigator = {props.navigator} 
      onDetailsPress={() => props.navigator.push(Routes.getDetailsRoute())}
    />
  );
};

SearchContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default SearchContainer;
