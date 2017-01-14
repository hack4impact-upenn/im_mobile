import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import images from '../../config/images';
import styles from './styles';

const Header = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.headerWrapper} onPress={onPress}>
    
      <Image
        style={styles.logo}
        source={images.logo}
      />
      <Text style={styles.logoText}> INTERNET MONITOR </Text>
    </TouchableOpacity>
  );
};

Header.propTypes = {
  onPress: () => console.log('Logo Pressed'),
};

export default Header;
