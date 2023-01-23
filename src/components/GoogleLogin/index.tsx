import React, { memo, useState } from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


interface GoogleLoginProps {
    onPress?: () => void;
}

export const GoogleLogin = memo(({ onPress }: GoogleLoginProps) => {

    const [userInfo, setUserInfo] = useState({})

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo, "user Info")
            setUserInfo({ userInfo });
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handleGoogleLogin} style={styles.container}>
            <Image style={styles.icon} source={require("../../assets/google.png")} />
        </TouchableOpacity>
    )
}) 