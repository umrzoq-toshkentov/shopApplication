import { Text, View } from "react-native";
import React, { memo } from "react";
import { styles } from "./styles";


interface SeparatorProps {
    text: string;
}

export const Separator = memo(({ text }: SeparatorProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    )
})