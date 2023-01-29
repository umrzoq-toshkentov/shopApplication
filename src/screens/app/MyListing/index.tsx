import { FlatList, RefreshControl } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from "../../../data/products";
import { FavoritetItem } from "../../../components/FavoriteItem";
import { Header } from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { Service } from "../../../dto";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../../api";

export const MyListing = () => {
    const { navigate, goBack } = useNavigation()
    const { isLoading, data, refetch } = useQuery<Service[]>(["services"], () => getServices());

    const renderItem = ({ item }: { item: Service }) => {
        const onPress = () => {
            navigate(SCREENS.PRODUCT_DETAILS as never, { item } as never)
        };

        const handleDelete = () => {
            console.log(item._id, "id")
        }

        return (<FavoritetItem onDelete={handleDelete} icon={require("../../../assets/trash.png")} onPress={onPress} {...item} />)
    }
    const onRefresh = () => {
        refetch()
    }

    return (
        <SafeAreaView>
            <Header showBack onBackPress={() => goBack()} title="My Listing" />
            <FlatList refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />} keyExtractor={(item) => String(item._id)} renderItem={renderItem} data={data} />
        </SafeAreaView>
    )
}

