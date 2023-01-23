import React, { memo } from 'react';
import { Text, TouchableOpacity } from "react-native"
import { styles } from './styles';

interface ButtonProps {
    text: string;
    handlePress?: () => void;
}

export const Button = memo(({ text, handlePress }: ButtonProps) => {
    console.log("mounting")
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress} style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
})