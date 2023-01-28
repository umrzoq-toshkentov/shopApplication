import React, { memo } from 'react';
import { Text, TouchableOpacity } from "react-native"
import { styles } from './styles';

interface ButtonProps {
    text: string;
    style?: any,
    disabled?: boolean;
    handlePress?: () => void;
}

export const Button = memo(({ text, handlePress, style, disabled }: ButtonProps) => {

    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.6} onPress={handlePress} style={[styles.container, style]}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
})