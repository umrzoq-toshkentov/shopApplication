import { Image, Pressable, Text, View } from "react-native";
import React, { memo } from "react";
import { styles } from "./styles";


interface ListItemProps {
    title: string;
    subtitle?: string;
    onPress?: () => void;
}

export const ListItem = memo(({ title, subtitle, onPress }: ListItemProps) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {!!subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

            </View>
            <View style={styles.arrowContainer}>
                <Image
                    resizeMode="contain"
                    style={styles.arrow}
                    source={require("../../assets/forward.png")}
                />
            </View>
        </Pressable>
    )
})