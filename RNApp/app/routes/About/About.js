import React, { PropTypes} from 'react';
import { Text, View, Linking, ScrollView} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const About = (props) => {
  return (

    <View style = {styles.container}>
    <Header/>
    <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={true}
          onScroll={() => { console.log('Scrolling...'); }}
    >

    <Text style = {styles.aboutTitle}>
       {"\n"}
        ABOUT
    </Text>

    <Text style = {styles.bodyText}>
        {props.mainBodyText}
        {"\n"}
    </Text>

        <Text style = {styles.subTitle}>
        COMPONENTS
        </Text>
        <Text style = {styles.listStuff}>
          {props.componentsText}
          {"\n"}
        </Text>
        
         <Text style = {styles.subTitleBlue}>
        INTERNET MONITOR TEAM
        </Text>
        <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/jclark')}>
          {props.team11}<Text style = {styles.bodyTextStandard}>{props.team12} 
          </Text>
          </Text>

        <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/rengels')}>
          {props.team21}<Text style = {styles.bodyTextStandard}>{props.team22}
          </Text>
        </Text>
        <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/betling')}>
          {props.team31}<Text style = {styles.bodyTextStandard}>{props.team32} 
          </Text>
          </Text>
          <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/rfaris')}>
          {props.team41}<Text style = {styles.bodyTextStandard}>{props.team42} 
          </Text>
          </Text>
          <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/ugasser')}>
          {props.team51}<Text style = {styles.bodyTextStandard}>{props.team52}
          </Text>
          </Text>
          <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/ctilton')}>
          {props.team61}<Text style = {styles.bodyTextStandard}>{props.team62}
          </Text>
          </Text>
          <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/rwestphal')}>
          {props.team71}<Text style = {styles.bodyTextStandard}>{props.team72}
          </Text>
          </Text>
          <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/jzittrain')}>
          {props.team81}<Text style = {styles.bodyTextStandard}>{props.team82}
          {"\n"}
          </Text>
          </Text>

        <Text style = {styles.subTitleGreen}>
        CONTACT
        </Text>
        <Text style = {styles.bodyText3}> 
        Email <Text style = {styles.bodyTextStandard} onPress = {() => Linking.openURL('mailto:info@thenetmonitor.org?')}>{props.email}</Text>
        </Text>


      </ScrollView>
      </View>
      
  );
};

About.propTypes = {
    mainBodyText: React.PropTypes.string,
    componentsText: React.PropTypes.string,
    team11: React.PropTypes.string,
    team12: React.PropTypes.string,
    team21: React.PropTypes.string,
    team22: React.PropTypes.string,
    team31: React.PropTypes.string,
    team32: React.PropTypes.string,
    team41: React.PropTypes.string,
    team42: React.PropTypes.string,
    team51: React.PropTypes.string,
    team52: React.PropTypes.string,
    team61: React.PropTypes.string,
    team62: React.PropTypes.string,
    team71: React.PropTypes.string,
    team72: React.PropTypes.string,
    team81: React.PropTypes.string,
    team82: React.PropTypes.string,
    email: React.PropTypes.string
};

export default About;
