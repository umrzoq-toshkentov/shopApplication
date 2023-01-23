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
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './src/constants/screens';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/screens/app/Home';
import { Profile } from './src/screens/app/Profile';
import { Favorites } from './src/screens/app/Favorites';
import { Image, ImageProps, ImageSourcePropType } from 'react-native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: colors.white
  },
};

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();
const TAB = () => {
  return (
    <BottomTab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === SCREENS.HOME) {
          iconName = focused ? require('./src/assets/tabs/home_active.png') : require('./src/assets/tabs/home.png')
        } else if (route.name === SCREENS.PROFILE) {
          iconName = focused ? require('./src/assets/tabs/profile_active.png') : require('./src/assets/tabs/profile.png')
        } else if (route.name === SCREENS.FAVORITES) {
          iconName = focused ? require('./src/assets/tabs/bookmark_active.png') : require('./src/assets/tabs/bookmark.png')
        }

        return <Image style={{ width: 24, height: 24 }} source={iconName} />
      },
      headerShown: false,
      tabBarShowLabel: false,
    })}>
      <BottomTab.Screen name={SCREENS.HOME} component={Home} />
      <BottomTab.Screen name={SCREENS.PROFILE} component={Profile} />
      <BottomTab.Screen name={SCREENS.FAVORITES} component={Favorites} />
    </BottomTab.Navigator>
  )
}

function App(): JSX.Element {
  const isSigned = true

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          {
            isSigned ? (
              <>
                <Stack.Screen options={{ headerShown: false }} name={SCREENS.TABS} component={TAB} />
              </>
            ) : (
              <>
                <Stack.Screen options={{ headerShown: false }} name={SCREENS.SPLASH} component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name={SCREENS.SIGN_UP} component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name={SCREENS.SIGN_IN} component={SignIn} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
