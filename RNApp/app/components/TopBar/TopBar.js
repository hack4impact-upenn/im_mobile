import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Routes from '../../config/routes';

const TopBar = (props) => {
	const onPress = () => {
		props.navigator.push(Routes.getSearchRoute())
	};
	
	const getBackButton = () => {
		if (props.back) {
			return (
				<View>
				<TouchableOpacity style={styles.back} onPress={onPress} />
				<View style={[styles.topbarTextWrapper, styles.topbarTextWithBack]}> 
       		 		<Text style={styles.topbarText}>{props.title}</Text>
      			</View>
      			</View>
			);
		} else {
			return (
				<View style={styles.topbarTextWrapper}> 
       		 		<Text style={styles.topbarText}>{props.title}</Text>
      			</View>
			);
		}
	};

  return (
   <View style={styles.topbar}>
      {getBackButton()}
      
    </View>
    
  );
};

TopBar.propTypes = {
  title: React.PropTypes.string,
  back: React.PropTypes.bool,
  navigator: React.PropTypes.object,
};


export default TopBar;
