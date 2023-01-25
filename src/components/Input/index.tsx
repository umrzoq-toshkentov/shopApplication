import React, { memo, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";

interface InputProps {
    label: string;
    placeholder: string;
    type?: "password" | "text"
    secureTextEntry?: boolean;
    value?: string;
    onChange?: any;
}

export const Input = memo(({ label, placeholder, secureTextEntry, onChange, value }: InputProps) => {
    const [visible, setVisible] = useState(true)

    const onEyePress = () => {
        setVisible(!visible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChange} secureTextEntry={secureTextEntry && !visible} placeholder={placeholder} style={styles.input} />
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