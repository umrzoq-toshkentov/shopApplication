import { ScrollView, Text, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { ListItem } from "../../../components/ListItem";
import { Button } from "../../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../../store/userContext";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../api";
import { ProfileDto } from "../../../dto";

export const Profile = () => {
    const { navigate } = useNavigation()
    const { setLoggedIn } = useContext(UserContext)
    const onLogout = async () => {
        AsyncStorage.removeItem('@token');
        setLoggedIn(false)
    }

    const { data: profile } = useQuery<ProfileDto>(["profile"], () => getProfile());

    const handlePress = (route: string) => {
        navigate(route as never)
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header
                showLogout
                title="Profile"
                onLogout={onLogout}
            />
            <ScrollView style={styles.container}>
                <Text style={styles.name}>Name: {profile?.fullName}</Text>
                <Text style={styles.email}>Email: {profile?.email}</Text>


                <View style={styles.listContainer}>
                    <ListItem onPress={() => handlePress(SCREENS.LISTINGS)} title="My Listings" subtitle="Already have 10 listing" />
                    <ListItem onPress={() => handlePress(SCREENS.SETTINGS)} title="Settings" subtitle="Account, FAQ, Contact" />
                </View>

                <Button handlePress={() => handlePress(SCREENS.CREATE_LISTINGS)} style={styles.button} text="Add New Listing" />

            </ScrollView>

        </SafeAreaView>
    )
}

