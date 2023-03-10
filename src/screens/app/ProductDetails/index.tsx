import { Image, Linking, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./style"
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../../components/Button";
import { ImageCarousel } from "../../../components/ImageCarousel";
import { Service, UpdateServiceDto } from "../../../dto";
import Config from 'react-native-config';
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../../App";
import { updateService } from "../../../api";
import { SCREENS } from "../../../constants/screens";

interface RouteParams {
    item: Service
}

export const ProductDetails = () => {
    const { goBack, navigate } = useNavigation()
    const route = useRoute()
    const params = route.params as RouteParams;
    const { title, image, price, description, images, _id, liked } = params?.item || {}
    const makeFavorite = useMutation(({ id, body }: { id: string | number, body: UpdateServiceDto }) => updateService(id, body), {
        onSuccess: () => {
            queryClient.invalidateQueries(["services"])
            navigate(SCREENS.FAVORITES as never)
        }
    })

    const handleLike = () => {
        makeFavorite.mutate({
            id: _id,
            body: {
                liked: !liked
            }
        })
    }

    const handlePress = () => {
        // Linking.openURL('tel:+12345678')
        Linking.openURL('mailto:utoshkentov@gmail.com')
    }
    return (
        <SafeAreaView style={styles.safe}>

            <ScrollView style={styles.container}>
                {images ? <ImageCarousel images={images} /> : <Image style={styles.image} source={{ uri: `${Config.API_BASE_URL}/api/${image.path}` }} />}
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
                <TouchableOpacity onPress={handleLike} style={styles.bookmark_container}>
                    <Image style={styles.bookmark} source={liked ? require("../../../assets/tabs/bookmark_active.png") : require("../../../assets/tabs/bookmark.png")} />
                </TouchableOpacity>
                <View style={styles.contact_container}>
                    <Button handlePress={handlePress} text="Contact seller" />
                </View>
            </View>
        </SafeAreaView>
    )
}

