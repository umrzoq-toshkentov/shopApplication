import { Pressable, ScrollView, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { ListItem } from "../../../components/ListItem";
import { EditableBox } from "../../../components/EditableBox";
import { Button } from "../../../components/Button";

export const Settings = () => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("Umrzoq")
    const [email, setEmail] = useState("utoshkentov@gmail.com")


    const handlePress = () => {
        setEdit(e => !e)
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header title="Settings" />
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Personal Information</Text>
                    <Pressable onPress={handlePress} style={styles.contentImageContainer}>
                        <Image style={styles.contentImage} resizeMode="contain" source={require("../../../assets/edit.png")} />
                    </Pressable>
                </View>
                <View style={styles.listContainer}>
                    <EditableBox label="Name" editable={edit} value={name} onChangeText={setName} />
                    <EditableBox label="Email" editable={edit} value={email} onChangeText={setEmail} />
                    {edit ? <Button text="Edit" handlePress={handlePress} /> : null}
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

