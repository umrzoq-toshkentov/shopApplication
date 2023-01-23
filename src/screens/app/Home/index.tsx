import { ScrollView, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";

export const Home = () => {
    const { navigate } = useNavigation()
    const handlePress = () => navigate(SCREENS.SIGN_UP as never)
    const handleSigIn = () => navigate(SCREENS.SIGN_IN as never)

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch title="Find All you need" />
                <View>
                    <Text>Hello from Home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

