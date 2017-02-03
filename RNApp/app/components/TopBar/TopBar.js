import React from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Routes from '../../config/routes';
import images from '../../config/images';

const TopBar = (props) => {
	const onPress = () => {
		props.navigator.pop();
	};

	const getBackButton = () => {
		if (props.back) {
			return (
				<View>
				<TouchableOpacity style={styles.back} onPress={onPress} >
					<Image 
						style={styles.backArrow}
						source={images.backArrow}
					/>
				</ TouchableOpacity >
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
