# Internet Monitor - Internet Weather App

### Synopsis
In partnership with the [The Berkman Klein Center for Internet & Society at Harvard University](https://cyber.harvard.edu/).

> Our goal is to create a kind of "internet weather app," a component of our larger [Internet Monitor project](https://thenetmonitor.org/) that will allow users of mobile devices to check the status of the internet access, censorship, cybersecurity climates around the world, with both global and individual country views. We think this will be hugely valuable in spreading awareness of internet freedom and access issues, as well as providing convenient access to timely, high-quality data to journalists, researchers, and advocates. The app will provide, simple, striking data-rich visualizations, while being as easy to understand and use as an actual weather app. It will grab all the data it needs from our existing [internet monitor api server](https://github.com/berkmancenter/internet_monitor/blob/dev/doc/platform_data_api.md).

## Boilerplate
Boilerplate from [here](https://github.com/spencercarli/react-native-meteor-boilerplate)

## Getting Started
- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone Repo: `$ git clone https://github.com/hack4impact/berkman.git`
- From the `RNApp` directory run `$ npm install`

## Running on iOS Simulator
_Note_: You must be on a Mac for this.

- From the `RNApp` directory run `$ make ios`
  - Alternatively, run `$ react-native run-ios`

## Running on Android Simulator
- Make sure you have an emulator configured and running.
- From the `RNApp` directory run `$ make android`
  - Alternatively, run `$ react-native run-android`

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
- Make sure [USB Debugging is enabled](https://facebook.github.io/react-native/docs/running-on-device-android.html#prerequisite-usb-debugging)
- Plug your device into your computer
- Run `adb devices` to make sure your device shows up
- Run `adb reverse tcp:8081 tcp:8081`
- In `RNApp/app/config/settings.js` change `localhost` in `METEOR_URL` to your computer's IP address (see note in "Running on Android" section on how to get your IP Address)
- Run `react-native run-android`

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-android.html#content).

### Contributing
Contributions are welcome! Please refer to our [Code of Conduct](./CONDUCT.md) for more information.

### License
[MIT License](LICENSE.md)
