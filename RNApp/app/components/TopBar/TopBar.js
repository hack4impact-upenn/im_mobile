import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const TopBar = (props) => {
	const getBackButton = () => {
		if (props.back) {
			return (
				<TouchableOpacity style={styles.back} />
			);
		} else {
			return;
		}
	};

  return (
   <View style={styles.topbar}>
      {getBackButton()}
      <View style={styles.topbarTextWrapper}> 
        <Text style={styles.topbarText}>{props.title}</Text>
      </View>
    </View>
    
  );
};

TopBar.propTypes = {
  title: React.PropTypes.string,
};


export default TopBar;
