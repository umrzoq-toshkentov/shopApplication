import { ActivityIndicator, FlatList, View, } from "react-native";
import React, { useMemo } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FavoritetItem } from "../../../components/FavoriteItem";
import { Header } from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { getServices, updateService } from "../../../api";
import { Service, UpdateServiceDto } from "../../../dto";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../../../App";

export const Favorites = () => {
    const { navigate } = useNavigation();
    const { isLoading, data } = useQuery<Service[]>(["services"], () => getServices());
    const deleteFavorite = useMutation(({ id, body }: { id: string | number, body: UpdateServiceDto }) => updateService(id, body), {
        onSuccess: () => {
            queryClient.invalidateQueries(["services"])
        }
    })

    const favorites = useMemo(() => data?.filter(item => !!item.liked), [data])
    const renderItem = ({ item }: { item: Service }) => {
        const onPress = () => {
            navigate(SCREENS.PRODUCT_DETAILS as never, { item } as never)
        };

        const handleDelete = () => {
            deleteFavorite.mutate({
                id: item._id,
                body: {
                    liked: false,
                }
            })
        }

        return (<FavoritetItem onDelete={handleDelete} onPress={onPress} {...item} />)
    }


    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
    }

    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList keyExtractor={(item) => String(item._id)} renderItem={renderItem} data={favorites} />
        </SafeAreaView>
    )
}

