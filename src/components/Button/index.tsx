import React, { memo } from 'react';
import { Text, TouchableOpacity } from "react-native"
import { styles } from './styles';

interface ButtonProps {
    text: string;
    style?: any,
    handlePress?: () => void;
}

export const Button = memo(({ text, handlePress, style, }: ButtonProps) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress} style={[styles.container, style]}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
})