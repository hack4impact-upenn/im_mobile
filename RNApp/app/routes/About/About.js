import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const About = (props) => {
  return (
    <View style = {styles.container}>

        <Text style = {styles.aboutTitle}>
       {"\n"}
          ABOUT
        </Text>
        <Text style = {styles.bodyText}>
        Internet Monitor is a research project based at the Berkman Klein Center for Internet & Society 
        at Harvard University. Internet Monitor's aim is to evaluate, describe, and summarize the 
        means, mechanisms, and extent of Internet content controls and Internet activity around 
        the world. The project helps researchers, advocates, policymakers, and user communities 
        understand trends in Internet health and activity through research, analysis, and data 
        visualization.
        {"\n"}
        </Text>
        <Text style = {styles.subTitle}>
        COMPONENTS
        </Text>
        <Text style = {styles.listStuff}>
        Website
        </Text>
        <Text style = {styles.listStuff}>
        Mobile app
        </Text>
        <Text style = {styles.listStuff}>
        Dashboard
        {"\n"}
        </Text>
         <Text style = {styles.subTitleBlue}>
        INTERNET MONITOR TEAM
        </Text>
        <Text style = {styles.bodyText2} onPress={() => Linking.openURL('https://cyber.harvard.edu/people/jclark')}>
          Justin Clark<Text style = {styles.bodyTextStandard}> Web developer, Berkman Klein Center for Internet & Society 
          </Text>
          </Text>

        <Text style = {styles.bodyText2}>
          Reinhard Engels<Text style = {styles.bodyTextStandard}> Assistant Director of Information Technology, Berkman Klein Center for Internet & Society 
          </Text>
        </Text>
        <Text style = {styles.bodyText2}>
          Bruce Etling<Text style = {styles.bodyTextStandard}> Fellow, Berkman Klein Center for Internet & Society 
          </Text>
          </Text>
          <Text style = {styles.bodyText2}>
          Bob Faris <Text style = {styles.bodyTextStandard}> Research Director, Berkman Klein Center for Internet & Society 
          </Text>
          </Text>
          <Text style = {styles.bodyText2}>
          Urs Gasser <Text style = {styles.bodyTextStandard}> Executive Director, Berkman Klein Center for Internet & Society
          </Text>
          </Text>
        <Text style = {styles.subTitleGreen}>
        CONTACT
        </Text>
        <Text style = {styles.bodyText3}> 
        Email <Text style = {styles.bodyTextStandard} onPress = {() => Linking.openURL('mailto:info@thenetmonitor.org?')}>info@thenetmonitor.org</Text>
        </Text>

      </View>
  );
};

About.propTypes = {
  
};

export default About;
