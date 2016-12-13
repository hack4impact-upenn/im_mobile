import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import images from '../../config/images';
import { capitalize } from '../../utils/string';
import styles from './styles';

const Profile = (props) => {
  const { user, signOut } = props;
  let email;

  if (user) {
    email = user.emails[0].address;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Image style={styles.header} source={images.profileHeader} />
      <View style={styles.body}>
        <Avatar email={email} />
        <Text>{capitalize(email)}</Text>
        <Button text="Sign Out" onPress={signOut} />
      </View>
    </View>
  );
};

Profile.propTypes = {
  user: React.PropTypes.object,
  signOut: React.PropTypes.func,
};

export default Profile;
