# Internet Monitor - Internet Weather App [![Circle CI](https://circleci.com/gh/hack4impact/berkman.svg?style=svg)](https://circleci.com/gh/hack4impact/berkman)

### Synopsis
In partnership with the [The Berkman Klein Center for Internet & Society at Harvard University](https://cyber.harvard.edu/).

> Our goal is to create a kind of "internet weather app," a component of our larger [Internet Monitor project](https://thenetmonitor.org/) that will allow users of mobile devices to check the status of the internet access, censorship, cybersecurity climates around the world, with both global and individual country views. We think this will be hugely valuable in spreading awareness of internet freedom and access issues, as well as providing convenient access to timely, high-quality data to journalists, researchers, and advocates. The app will provide, simple, striking data-rich visualizations, while being as easy to understand and use as an actual weather app. It will grab all the data it needs from our existing internet monitor api server.

## Boilerplate
Boilerplate from [here](https://github.com/spencercarli/react-native-meteor-boilerplate)

This is a simple way to get started building an app with React Native and Meteor. It is opinionated to make it easy for people to start but if you have your own way of doing things it's very easy to swap things out and move them around however you see fit.

As it currently stands this project is only focused on configuring the React Native project. The Meteor side is up to you. For thoughts on how to structure your Meteor App I would suggest you read the [Meteor Guide](http://guide.meteor.com/) and the [Mantra spec](http://mantrajs.com/).

You can checkout a _very_ quick walkthrough of the project [here](https://www.youtube.com/watch?v=vM4axvopnJc).

## Getting Started
- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone Repo: `git clone https://github.com/hack4impact/berkman.git`
- From the `RNApp` directory run `npm install`

## Running on iOS Simulator
_Note_: You must be on a Mac for this.

- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```
- From the `RNApp` directory run `react-native run-ios`

## Running on Android Simulator
- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```
- Get the IP address of your machine
- In `RNApp/app/config/settings.js` change `localhost` to your machine's IP address
- Make sure you have an emulator configured and running.
- From the `RNApp` directory run `react-native run-android`

On OSX you can get your IP address by running `ipconfig getifaddr en1` in a terminal window.

On linux running `ifconfig` will get you a list of your network interfaces along with their IP addresses. For the stock Google simulator you will want to use the IP of your active network connection (probably `eth0` or `wlan0`). If you are using the Genymotion simulator, it runs in a Virtual Box VM with a Host-only network interface. You will want to use the IP address of this network which may look like vboxnet0 under ifconfig.

## Running on iOS Device
_Note_: You must be on a Mac for this.

- Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)
- In `RNApp/ios/RNApp/AppDelegate.m` change `localhost` to your machine's IP address
- In `RNApp/app/config/settings.js` change `localhost` to your machine's IP address
- Plug your device into your computer (make sure it's on the same network)
- Open the project in Xcode
- Select your device in Xcode and press "Build and run"

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content).

## Running on Android Device
- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```
- Make sure [USB Debugging is enabled](https://facebook.github.io/react-native/docs/running-on-device-android.html#prerequisite-usb-debugging)
- Plug your device into your computer
- Run `adb devices` to make sure your device shows up
- Run `adb reverse tcp:8081 tcp:8081`
- In `RNApp/app/config/settings.js` change `localhost` in `METEOR_URL` to your computer's IP address (see note in "Running on Android" section on how to get your IP Address)
- Run `react-native run-android`

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-android.html#content).

## Project Structure
Check out [this article](https://medium.com/@spencer_carli/organizing-a-react-native-project-9514dfadaa0#.361gf1awu) for an overview of the `RNApp` directory.

### Contributing
Contributions are welcome! Please refer to our [Code of Conduct](./CONDUCT.md) for more information.

### License
[MIT License](LICENSE.md)
