import { Image, Pressable, StyleProp, Text, TextInput, View, ViewStyle } from "react-native";
import React, { memo } from "react";
import { styles } from "./styles";


interface EditableBoxProps {
    label: string;
    value?: string;
    style?: StyleProp<ViewStyle>;
    editable?: boolean;
    onChangeText?: (text: string) => void;
}

export const EditableBox = memo(({ label, value, onChangeText, style, editable }: EditableBoxProps) => {

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
        </View>
    )
})