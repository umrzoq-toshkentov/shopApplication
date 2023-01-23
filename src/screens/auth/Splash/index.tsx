import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "./style";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Splash = () => {
    const { navigate } = useNavigation()
    const handlePress = () => navigate(SCREENS.SIGN_UP as never)
    const handleSigIn = () => navigate(SCREENS.SIGN_IN as never)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.image} source={require("../../../assets/splash.png")} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You'll Find  </Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                    <Text style={styles.title}>Here!</Text>
                </View>
                <View style={styles.footerContainer}>
                    <Button handlePress={handlePress} text="Sign Up" />
                    <Pressable hitSlop={20} onPress={handleSigIn}>
                        <Text style={styles.footerText}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

