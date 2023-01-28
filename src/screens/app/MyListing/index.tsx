import { FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { products, ProductItemType } from "../../../data/products";
import { FavoritetItem } from "../../../components/FavoriteItem";
import { Header } from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";

export const MyListing = () => {
    const { navigate, goBack } = useNavigation()

    const renderItem = ({ item }: { item: ProductItemType }) => {
        const onPress = () => {
            navigate(SCREENS.PRODUCT_DETAILS as never, { item } as never)
        };

        return (<FavoritetItem icon={require("../../../assets/trash.png")} onPress={onPress} {...item} />)
    }

    return (
        <SafeAreaView>
            <Header showBack onBackPress={() => goBack()} title="My Listing" />
            <FlatList keyExtractor={(item) => String(item.id)} renderItem={renderItem} data={products} />
        </SafeAreaView>
    )
}

