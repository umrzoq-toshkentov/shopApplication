import React, { memo } from 'react';
import { Image, Pressable, Text, View } from "react-native"
import { styles } from './styles';
import { colors } from '../../utils/colors';

interface CategoryBoxProps {
    title: string;
    image: string;
    isFirst?: boolean;
    isSelected?: boolean;
    onPress?: () => void;
}

export const CategoryBox = memo(({ title, image, onPress, isFirst, isSelected }: CategoryBoxProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, isFirst ? { marginLeft: 24 } : {}]} hitSlop={10}>
            <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.black } : {}]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={[styles.title, isSelected ? { color: colors.blue, fontWeight: "500" } : {}]}>
                {title}
            </Text>
        </Pressable>
    )
})