import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./style"
import { useRoute } from "@react-navigation/native";
import { ProductItemType } from "../../../data/products";

interface RouteParams {
    item: ProductItemType
}

export const ProductDetails = () => {
    const route = useRoute()
    const params = route.params as RouteParams;
    const { title, image, price } = params?.item || {}

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.description}>{"desc"}</Text>
            </View>

        </ScrollView>
    )
}

