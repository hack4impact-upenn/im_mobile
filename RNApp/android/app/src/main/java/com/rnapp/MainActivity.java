package com.rnapp;

import com.facebook.react.ReactActivity;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import java.util.List;
 import java.util.Arrays;
 import com.facebook.react.shell.MainReactPackage;
 import com.facebook.react.ReactPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RNApp";
    }

 	protected List<ReactPackage> getPackages() {
    	return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNGeocoderPackage()); // <------ add this
  }
}
