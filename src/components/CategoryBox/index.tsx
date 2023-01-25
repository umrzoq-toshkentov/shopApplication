import React, { memo } from 'react';
import { Image, Pressable, Text, View } from "react-native"
import { styles } from './styles';

interface CategoryBoxProps {
    title: string;
    image: string;
    onPress?: () => void;
}

export const CategoryBox = memo(({ title, image, onPress }: CategoryBoxProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container} hitSlop={10}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </Pressable>
    )
})