import { FlatList, View } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { products, ProductItemType } from "../../../data/products";
import { FavoritetItem } from "../../../components/FavoriteItem";
import { styles } from "./style";
import { Header } from "../../../components/Header";

export const Favorites = () => {

    const renderItem = ({ item }: { item: ProductItemType }) => {

        return (<FavoritetItem {...item} />)
    }

    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList keyExtractor={(item) => String(item.id)} renderItem={renderItem} data={products} />
        </SafeAreaView>
    )
}

