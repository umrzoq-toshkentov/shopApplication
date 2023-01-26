import { Pressable, ScrollView, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { ListItem } from "../../../components/ListItem";

export const Settings = () => {


    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header title="Settings" />
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Personal Information</Text>
                    <Pressable style={styles.contentImageContainer}>
                        <Image style={styles.contentImage} resizeMode="contain" source={require("../../../assets/edit.png")} />
                    </Pressable>
                </View>
                <View style={styles.listContainer}>
                    <ListItem title="My Listings" subtitle="Already have 10 listing" />
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" />
                </View>

                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Help Center</Text>
                </View>

                <View style={styles.listContainer}>
                    <ListItem title="FAQ" />
                    <ListItem title="Contact Us" />
                    <ListItem title="Privacy & Terms" />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

