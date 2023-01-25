import React, { memo } from 'react';
import { Image, Pressable, Text, View } from "react-native"
import { styles } from './styles';

interface ProductItemProps {
    title: string;
    price?: string;
    image: string;
    onPress?: () => void;
}

export const ProductItem = memo(({ title, image, onPress, price, }: ProductItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container} hitSlop={10}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.price}>
                {price}
            </Text>
        </Pressable>
    )
})