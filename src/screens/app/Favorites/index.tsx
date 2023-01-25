import { FlatList, View } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { products, ProductItemType } from "../../../data/products";
import { FavoritetItem } from "../../../components/FavoriteItem";
import { styles } from "./style";
import { Header } from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";

export const Favorites = () => {
    const { navigate } = useNavigation()

    const renderItem = ({ item }: { item: ProductItemType }) => {
        const onPress = () => {
            navigate(SCREENS.PRODUCT_DETAILS as never, { item } as never)
        };

        return (<FavoritetItem onPress={onPress} {...item} />)
    }

    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList keyExtractor={(item) => String(item.id)} renderItem={renderItem} data={products} />
        </SafeAreaView>
    )
}

