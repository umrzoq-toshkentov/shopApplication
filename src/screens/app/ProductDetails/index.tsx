import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./style"
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductItemType } from "../../../data/products";
import { Button } from "../../../components/Button";
import { ImageCarousel } from "../../../components/ImageCarousel";

interface RouteParams {
    item: ProductItemType
}

export const ProductDetails = () => {
    const { goBack } = useNavigation()
    const route = useRoute()
    const params = route.params as RouteParams;
    const { title, image, price, description, images } = params?.item || {}

    return (
        <SafeAreaView style={styles.safe}>

            <ScrollView style={styles.container}>
                {images ? <ImageCarousel images={images} /> : <Image style={styles.image} source={{ uri: image }} />}
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>

                <Pressable hitSlop={10} onPress={() => goBack()} style={styles.back_container}>
                    <Image style={styles.back} source={require("../../../assets/back.png")} />
                </Pressable>
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

