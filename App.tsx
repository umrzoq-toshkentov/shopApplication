/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Splash } from './src/screens/auth/Splash';
import { SignUp } from './src/screens/auth/SignUp';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import { SignIn } from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './src/constants/screens';


const Stack = createNativeStackNavigator()

function App(): JSX.Element {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name={SCREENS.SPLASH} component={Splash} />
        <Stack.Screen options={{ headerShown: false }} name={SCREENS.SIGN_UP} component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name={SCREENS.SIGN_IN} component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
