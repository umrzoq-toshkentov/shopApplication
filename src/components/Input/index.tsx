import React, { memo, useState } from "react";
import { Image, KeyboardTypeOptions, Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

interface InputProps {
    label: string;
    placeholder: string;
    type?: "password" | "text"
    secureTextEntry?: boolean;
    value?: string;
    onChange?: any;
    keyboardType?: KeyboardTypeOptions | undefined;
    multiline?: boolean;
    maxLength?: number;
    numberOfLines?: number;
    style?: any;
}

export const Input = memo(({ label,
    placeholder,
    secureTextEntry,
    onChange,
    value,
    keyboardType,
    multiline,
    maxLength,
    numberOfLines,
    style
}: InputProps) => {
    const [visible, setVisible] = useState(true)

    const onEyePress = () => {
        setVisible(!visible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={secureTextEntry && !visible}
                    placeholder={placeholder}
                    style={[styles.input, style]}
                    multiline={multiline}
                    maxLength={maxLength}
                    numberOfLines={numberOfLines}
                />
                {
                    secureTextEntry ?
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.icon} source={!visible ? require("../../assets/eye.png") : require("../../assets/eyeclose.png")} />
                        </Pressable> : null
                }
            </View>
        </View>
    )
})