import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "./style";
import { Button } from "../../../components/Button";

export const Splash = () => {
    const handlePress = () => {
        console.log("something")
    }
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require("../../../assets/splash.png")} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find  </Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>
            <View style={styles.footerContainer}>
                <Button handlePress={handlePress} text="Sign Up" />
                <Pressable hitSlop={20}>
                    <Text style={styles.footerText}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    )
}

