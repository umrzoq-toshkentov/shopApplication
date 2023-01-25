import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "./screens";
import { Image } from "react-native";
import { Home } from '../screens/app/Home';
import { Profile } from '../screens/app/Profile';
import { Favorites } from '../screens/app/Favorites';
import { colors } from "../utils/colors";


const BottomTab = createBottomTabNavigator();

export const TAB = () => {
  return (
    <BottomTab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === SCREENS.HOME) {
          iconName = focused ? require('../assets/tabs/home_active.png') : require('../assets/tabs/home.png')
        } else if (route.name === SCREENS.PROFILE) {
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
      <BottomTab.Screen name={SCREENS.PROFILE} component={Profile} />
      <BottomTab.Screen name={SCREENS.FAVORITES} component={Favorites} />
    </BottomTab.Navigator>
  )
}