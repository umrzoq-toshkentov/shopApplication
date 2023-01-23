import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Profile = () => {
    const { navigate } = useNavigation()
    const handlePress = () => navigate(SCREENS.SIGN_UP as never)
    const handleSigIn = () => navigate(SCREENS.SIGN_IN as never)

    return (
        <SafeAreaView>
            <View>
                <Text>Hello from Profile</Text>
            </View>
        </SafeAreaView>
    )
}

