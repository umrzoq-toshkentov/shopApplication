import React, { memo } from 'react';
import { Image, Pressable, Text } from "react-native"
import { styles } from './styles';
import { Service } from '../../dto';
import Config from 'react-native-config';

interface ProductItemProps extends Partial<Service> {
    title: string;
    onPress?: () => void;
}

export const ProductItem = memo(({ title, image, onPress, price, }: ProductItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container} hitSlop={10}>
            <Image style={styles.image} source={{ uri: `${Config.API_BASE_URL}/api/${image.path}` }} />
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.price}>
                {price}
            </Text>
        </Pressable>
    )
})