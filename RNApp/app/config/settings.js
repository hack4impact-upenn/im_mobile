// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'ws://berkman-internet-weather-app.herokuapp.com/websocket';
if (process.env.NODE_ENV === 'production') {
  METEOR_URL = 'ws://berkman-internet-weather-app.herokuapp.com/websocket'; // your production server url
}

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;
