import React, {Component, PropTypes} from 'react';
import Meteor, { createContainer } from 'react-native';
import About from './About';

class AboutContainer extends Component {
  constructor(){
  	super();
  	this.state = {
  		mainBodyText: "Internet Monitor is a research project based at the Berkman Klein Center for Internet & Society at Harvard University. Internet Monitor's aim is to evaluate, describe, and summarize the  means, mechanisms, and extent of Internet content controls and Internet activity around the world. The project helps researchers, advocates, policymakers, and user communities understand trends in Internet health and activity through research, analysis, and data visualization.",
      	componentsText: "Website\nMobile app\nDashboard",
      	team11: "Justin Clark",
      	team12: " Web developer, Berkman Klein Center for Internet & Society",
      	team21: "Reinhard Engels",
      	team22: " Assistant Director of Information Technology, Berkman Klein Center for Internet & Society",
      	team31: "Bruce Etling",
      	team32: " Fellow, Berkman Klein Center for Internet & Society",
      	team41: "Bob Faris",
      	team42: " Research Director, Berkman Klein Center for Internet & Society",
      	team51: "Urs Gasser",
      	team52: " Executive Director, Berkman Klein Center for Internet & Society",
      	team61: "Casey Tilton",
      	team62: " Project Coordinator, Berkman Klein Center for Internet & Society",
      	team71: "Ryan Morrison~Westphal",
      	team72: " Web Developer, Berkman Klein Center for Internet & Society",
      	team81: "Jonathan Zittrain",
      	team82: " Co-Founder and Director, Berkman Klein Center for Internet & Society",
      	email: "info@thenetmonitor.org"
  	}

  }
  render() {
  return (
    <About
    	mainBodyText = {this.state.mainBodyText}
      	componentsText = {this.state.componentsText}
      	team11 = {this.state.team11}
      	team12 = {this.state.team12}
      	team21 = {this.state.team21}
      	team22 = {this.state.team22}
      	team31 = {this.state.team31}
      	team32 = {this.state.team32}
      	team41 = {this.state.team41}
      	team42 = {this.state.team42}
      	team51 = {this.state.team51}
      	team52 = {this.state.team52}
      	team61 = {this.state.team61}
      	team62 = {this.state.team62}
      	team71 = {this.state.team71}
      	team72 = {this.state.team72}
      	team81 = {this.state.team81}
      	team82 = {this.state.team82}
      	email = {this.state.email}
    />
  );
}
}

AboutContainer.propTypes = {
  navigator: React.PropTypes.object,
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

export default AboutContainer;
