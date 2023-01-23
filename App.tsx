/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Splash } from './src/screens/auth/Splash';
import { SignUp } from './src/screens/auth/SignUp';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import { SignIn } from './src/screens/auth/SignIn';

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
    <SafeAreaView>
      {/* <Splash /> */}
      {/* <SignUp /> */}
      <SignIn />
    </SafeAreaView>
  );
}

export default App;
