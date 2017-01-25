import React from 'react';
import MapView from './MapView';
import Routes from '../../config/routes';

const MapViewContainer = (props) => {
  return (
    <MapView {...props}/>
  );
};

MapViewContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default MapViewContainer;
