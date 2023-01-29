import React, { memo } from 'react';
import { Image, ImageSourcePropType, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles';
import Config from 'react-native-config';
import { Service } from '../../dto';

interface FavoriteItemProps extends Service {
    title: string;
    onPress?: () => void;
    icon?: ImageSourcePropType | boolean;
    onDelete?: () => void;
}

export const FavoritetItem = memo(({ title, image, onPress, price, icon, onDelete }: FavoriteItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container} hitSlop={10}>
            <View style={styles.leftContent}>
                {image?.path ? <Image style={styles.image} source={{ uri: `${Config.API_BASE_URL}/api/${image.path}` }} /> : null}

                <View style={styles.content}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.price}>
                        {price}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={onDelete}>
                {icon ? <Image style={styles.deleteImage} source={icon || require("../../assets/delete.png")} /> : null}
            </TouchableOpacity>
        </Pressable>
    )
})