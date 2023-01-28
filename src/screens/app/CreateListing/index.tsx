import { ScrollView, Text, View, Image, TouchableOpacity, FlatList, Pressable, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Asset, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Input } from "../../../components/Input";


export const CreateListing = () => {
    const [images, setImages] = useState<Asset[]>([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        title: "",
        price: "0",
        description: ""
    })
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
        setLoading(true)
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
        } finally {
            setLoading(false)
        }
    }

    const onChange = (v: string, key: string) => {
        setValues((values) => ({
            ...values,
            [key]: v
        }))
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header showBack onBackPress={goBack} title="Create a new listing" />

            <KeyboardAvoidingView behavior="position">
                <ScrollView style={styles.container}>
                    <Text style={styles.sectionTitle}>Upload a photo</Text>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity disabled={loading} style={styles.uploadImageContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadWrapper}>
                                <Image style={styles.upload} source={require("../../../assets/plus.png")} />
                            </View>
                        </TouchableOpacity>
                        {images.length > 0 ? <FlatList style={styles.imageList} horizontal showsHorizontalScrollIndicator={false} data={images} keyExtractor={(item, index) => String(index)} renderItem={renderImageItem} /> : null}
                        {loading ? <ActivityIndicator /> : null}
                    </View>

                    <View style={styles.formItem}>
                        <Input
                            placeholder="Listing title"
                            label="Title"
                            value={values.title}
                            onChange={(v: string) => onChange(v, "title")}
                        />
                    </View>
                    <View style={styles.formItem}>
                        <Input
                            placeholder="Enter Price in USD"
                            label="Price"
                            keyboardType="number-pad"
                            value={values.price}
                            onChange={(v: string) => onChange(v, "price")}
                        />
                    </View>
                    <View style={styles.formItem}>
                        <Input
                            multiline
                            numberOfLines={8}
                            label="Description"
                            placeholder="Tell us more..."
                            value={values.description}
                            style={styles.description}
                            onChange={(v: string) => onChange(v, "description")}
                        />
                    </View>

                    <View style={styles.formItem}>
                        <Button text="Submit" />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>


        </SafeAreaView>
    )
}

