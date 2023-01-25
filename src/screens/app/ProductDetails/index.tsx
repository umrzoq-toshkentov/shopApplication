import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./style"
import { useRoute } from "@react-navigation/native";
import { ProductItemType } from "../../../data/products";
import { Button } from "../../../components/Button";

interface RouteParams {
    item: ProductItemType
}

export const ProductDetails = () => {
    const route = useRoute()
    const params = route.params as RouteParams;
    const { title, image, price, description } = params?.item || {}

    return (
        <SafeAreaView style={styles.safe}>

            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmark_container}>
                    <Image style={styles.bookmark} source={require("../../../assets/tabs/bookmark_active.png")} />
                </Pressable>
                <View style={styles.contact_container}>
                    <Button text="Contact seller" />
                </View>
            </View>
        </SafeAreaView>
    )
}

