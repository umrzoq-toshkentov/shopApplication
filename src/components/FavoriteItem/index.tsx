import React, { memo } from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"
import { styles } from './styles';

interface FavoriteItemProps {
    title: string;
    price?: string;
    image: string;
    onPress?: () => void;
    icon?: ImageSourcePropType
}

export const FavoritetItem = memo(({ title, image, onPress, price, icon }: FavoriteItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container} hitSlop={10}>
            <View style={styles.leftContent}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.price}>
                        {price}
                    </Text>
                </View>
            </View>
            <Image style={styles.deleteImage} source={icon || require("../../assets/delete.png")} />
        </Pressable>
    )
})