import { ScrollView, Text, View, Image, TouchableOpacity, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Asset, launchCamera, launchImageLibrary } from 'react-native-image-picker';


export const CreateListing = () => {
    const [images, setImages] = useState<Asset[]>([])
    const { goBack } = useNavigation();

    const renderImageItem = ({ item }: { item: Asset }) => {

        const handleDelete = () => {
            const filteredImage = images.filter(image => image.uri !== item.uri)
            setImages(filteredImage);
        }


        return (
            <View style={styles.uploadedImage}>
                <Image style={styles.image} source={{ uri: item.uri }} />
                <Pressable style={styles.deleteImageContainer} onPress={handleDelete}>
                    <Image style={styles.deleteImage} source={require("../../../assets/delete.png")} />
                </Pressable>
            </View>
        )
    }

    const uploadNewImage = async () => {
        try {
            const res = await launchImageLibrary({
                mediaType: 'mixed',
                selectionLimit: 4
            })
            if (res?.assets?.length) {
                setImages((list) => [...list, ...res.assets as Asset[]])
            }
        } catch (e) {
            console.log(e, "=> error")
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header showBack onBackPress={goBack} title="Create a new listing" />
            <View>

                <View style={styles.imageContent}>

                    <Text style={styles.sectionTitle}>Upload a photo</Text>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.uploadImageContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadWrapper}>
                                <Image style={styles.upload} source={require("../../../assets/plus.png")} />
                            </View>
                        </TouchableOpacity>
                        {images.length > 0 ? <FlatList style={styles.imageList} horizontal showsHorizontalScrollIndicator={false} data={images} keyExtractor={(item, index) => String(index)} renderItem={renderImageItem} /> : null}

                    </View>
                </View>

            </View>
            <ScrollView style={styles.container}>
            </ScrollView>

        </SafeAreaView>
    )
}

