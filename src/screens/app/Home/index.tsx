import { FlatList, ScrollView, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { categories } from "../../../data/categories";
import { CategoryBox } from "../../../components/CategoryBox";


interface ItemType {
    title: string;
    image: string;
    id?: number;
}

export const Home = () => {
    const { navigate } = useNavigation()
    const handlePress = () => navigate(SCREENS.SIGN_UP as never)
    const handleSigIn = () => navigate(SCREENS.SIGN_IN as never)

    const renderCategoryItem = ({ item }: { item: ItemType }) => {

        const onPress = () => {
            console.log("pressed")
        }
        return (
            <CategoryBox {...item} onPress={onPress} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch title="Find All you need" />
                <FlatList showsHorizontalScrollIndicator={false} horizontal style={styles.list} nestedScrollEnabled data={categories} renderItem={renderCategoryItem} keyExtractor={(_item, index) => String(index)} />
            </View>
        </SafeAreaView>
    )
}

