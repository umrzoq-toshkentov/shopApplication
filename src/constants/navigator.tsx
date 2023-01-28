import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "./screens";
import { Image } from "react-native";
import { Home } from '../screens/app/Home';
import { Profile } from '../screens/app/Profile';
import { Favorites } from '../screens/app/Favorites';
import { Splash } from '../screens/auth/Splash';
import { SignUp } from '../screens/auth/SignUp';
import { SignIn } from '../screens/auth/SignIn';
import { colors } from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "../screens/app/Settings";
import { CreateListing } from "../screens/app/CreateListing";
import { MyListing } from "../screens/app/MyListing";
import { ProductDetails } from '../screens/app/ProductDetails';
import { useContext } from "react";
import { UserContext } from "../store/userContext";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name={SCREENS.PROFILE} component={Profile} />
      <Stack.Screen options={{ headerShown: false }} name={SCREENS.SETTINGS} component={Settings} />
      <Stack.Screen options={{ headerShown: false }} name={SCREENS.CREATE_LISTINGS} component={CreateListing} />
      <Stack.Screen options={{ headerShown: false }} name={SCREENS.LISTINGS} component={MyListing} />
    </Stack.Navigator>
  )
}

export const TAB = () => {
  return (
    <BottomTab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === SCREENS.HOME) {
          iconName = focused ? require('../assets/tabs/home_active.png') : require('../assets/tabs/home.png')
        } else if (route.name === SCREENS.PROFILE_SCREEN) {
          iconName = focused ? require('../assets/tabs/profile_active.png') : require('../assets/tabs/profile.png')
        } else if (route.name === SCREENS.FAVORITES) {
          iconName = focused ? require('../assets/tabs/bookmark_active.png') : require('../assets/tabs/bookmark.png')
        }

        return <Image style={{ width: 24, height: 24 }} source={iconName} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopColor: colors.lightGrey
      }
    })}>
      <BottomTab.Screen name={SCREENS.HOME} component={Home} />
      <BottomTab.Screen name={SCREENS.FAVORITES} component={Favorites} />
      <BottomTab.Screen name={SCREENS.PROFILE_SCREEN} component={ProfileStack} />
    </BottomTab.Navigator>
  )
}

export const Navigator = () => {
  const { isLoggedIn } = useContext(UserContext)

  return (
    <Stack.Navigator>
      {
        isLoggedIn ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name={SCREENS.TABS} component={TAB} />
            <Stack.Screen options={{ headerShown: false }} name={SCREENS.PRODUCT_DETAILS} component={ProductDetails} />
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
  )
}