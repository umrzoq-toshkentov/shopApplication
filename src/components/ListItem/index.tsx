import { Image, Pressable, Text, View } from "react-native";
import React, { memo } from "react";
import { styles } from "./styles";


interface ListItemProps {
    title: string;
    subtitle: string;
}

export const ListItem = memo(({ title, subtitle }: ListItemProps) => {

    return (
        <Pressable style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
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