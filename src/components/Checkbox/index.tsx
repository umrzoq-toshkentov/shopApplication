import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles';

interface CheckboxProps {
    text?: string;
    checked: boolean;
    handleCheck: () => void;
}

export const Checkbox = memo(({ checked, handleCheck, text }: CheckboxProps) => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handleCheck} style={styles.container}>
            {
                checked ? <View style={styles.checkboxContainer}>
                    <Image style={styles.icon} source={require("../../assets/tick.png")} />
                </View> : <View style={styles.checkBoxEmpty} />
            }
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
})