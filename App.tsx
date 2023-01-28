/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './src/store/userContext';
import { Navigator } from './src/constants/navigator';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: colors.white
  },
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    }
  }
});

function App(): JSX.Element {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])



  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-ignore */}
      <UserProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={MyTheme}>
            <Navigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
