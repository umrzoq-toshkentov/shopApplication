import React, { memo } from 'react';
import { Text, Pressable, Image, View } from "react-native"
import { styles } from "./style"

interface HeaderProps {
    text: string;
    onBackPress: () => void;
}

export const AuthHeader = memo(({ text, onBackPress }: HeaderProps) => {

    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require("../../assets/arrowBack.png")} />
            </Pressable>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
})