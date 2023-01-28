import React, { memo, useState } from "react";
import { Image, KeyboardTypeOptions, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
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
    inputType?: "input" | "picker"
    options?: {
        id?: number;
        title: string;
    }[]
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
    style,
    inputType,
    options,
}: InputProps) => {
    const [visible, setVisible] = useState(true)
    const [modal, setModal] = useState(false)

    const onEyePress = () => {
        setVisible(!visible)
    }

    const handleModal = () => setModal(m => !m)

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {
                inputType === "picker" ?
                    (
                        <Pressable onPress={handleModal} style={styles.inputContainer}>
                            {/* @ts-ignore */}
                            <Text style={[styles.placeholder, style, value ? styles.selectedOption : {}]}>{value ? value.title : placeholder}</Text>

                            <Image resizeMode="contain" style={styles.arrow} source={require("../../assets/forward.png")} />
                        </Pressable>
                    ) :
                    (
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
                    )
            }

            <Modal transparent visible={modal}>
                <TouchableOpacity activeOpacity={1} style={styles.modalWrapper} onPress={handleModal}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Option</Text>
                        {
                            options?.map(option => {
                                if (!option.id) {
                                    return null
                                }
                                // @ts-ignore
                                const selected = (value?.id == option.id.toString()) as boolean

                                return (
                                    <Text onPress={() => {
                                        onChange(option)
                                        setModal(false)
                                    }} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={option.id}>{option.title}</Text>
                                )
                            })
                        }
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    )
})