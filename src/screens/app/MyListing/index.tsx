import { Button, FlatList, RefreshControl, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FavoritetItem } from "../../../components/FavoriteItem";
import { Header } from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { Service } from "../../../dto";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteService, getServices } from "../../../api";
import { queryClient } from "../../../../App";
import { Modal } from "../../../components/Modal";
import { styles } from "./style";

export const MyListing = () => {
    const { navigate, goBack } = useNavigation()
    const { isLoading, data, refetch } = useQuery<Service[]>(["services"], () => getServices());
    const [modal, setModal] = useState({
        open: false,
        id: ''
    })

    const handleModal = () => {
        setModal({
            open: false,
            id: ''
        })
    }

    const deleteListing = useMutation(({ id }: { id: string }) => deleteService(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(["services"])
            setModal({
                open: false,
                id: ''
            })
        }
    })
    const renderItem = ({ item }: { item: Service }) => {
        const onPress = () => {
            navigate(SCREENS.PRODUCT_DETAILS as never, { item } as never)
        };

        const handleDelete = () => {
            setModal({
                open: true,
                id: item._id
            })
        }

        return (<FavoritetItem onDelete={handleDelete} icon={require("../../../assets/trash.png")} onPress={onPress} {...item} />)
    }

    const handleDelete = () => {
        deleteListing.mutate({
            id: modal.id
        })
    }

    const onRefresh = () => {
        refetch()
    }

    return (
        <SafeAreaView>
            <Header showBack onBackPress={() => goBack()} title="My Listing" />
            <FlatList refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />} keyExtractor={(item) => String(item._id)} renderItem={renderItem} data={data} />
            <Modal open={modal.open} handleModal={handleModal}>
                <View style={styles.modalWrapper}>
                    <Text style={styles.modalTitle}>Are you sure to delete?</Text>

                    <View style={styles.modalFooter}>
                        <Button title="No" onPress={() => {
                            setModal({
                                open: false,
                                id: ''
                            })
                        }} />
                        <Button color="red" title="Yes" onPress={handleDelete} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

