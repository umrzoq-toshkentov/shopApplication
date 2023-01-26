import { Pressable, ScrollView, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";

export const CreateListing = () => {
    const { goBack } = useNavigation()


    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header showBack onBackPress={goBack} title="Create a new listing" />
            <ScrollView style={styles.container}>

                <Text>Upload a photo</Text>
            </ScrollView>

        </SafeAreaView>
    )
}

