import { memo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style"
import { Input } from "../Input";

interface HeaderProps {
    title: string;
    onBackPress?: () => void;
    value?: string;
    onSearch?: any;
    onLogout?: () => void;
    showSearch?: boolean;
    showLogout?: boolean;
    showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = memo(({ title, value, onBackPress, onLogout, onSearch, showBack, showLogout, showSearch }) => {

    const [showSearchInput, setShowSearchInput] = useState(false)

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {
                    showBack ?
                        <Pressable hitSlop={20} onPress={onBackPress}>
                            <Image style={styles.icon} source={require("../../assets/back.png")} />
                        </Pressable>
                        : showSearch ? <Pressable hitSlop={20} onPress={onSearchClick}>
                            <Image style={styles.icon} source={require("../../assets/search.png")} />
                        </Pressable> : <View style={styles.space} />
                }
                <Text style={styles.title}>{title}</Text>
                {
                    showLogout ? <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require("../../assets/logout.png")} />
                    </Pressable> : <View style={styles.space} />
                }
            </View>
            {
                showSearchInput ? <Input value={value} onChange={onSearch} label="" placeholder="Type your keyword ..." /> : null
            }
        </View>
    )
})