import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { AuthHeader } from "../../../components/AuthHeader";
import { Input } from "../../../components/Input";
import { Checkbox } from "../../../components/Checkbox";
import { Button } from "../../../components/Button";
import { Separator } from "../../../components/Separator";
import { GoogleLogin } from "../../../components/GoogleLogin";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignUp = () => {
    const { navigate, goBack } = useNavigation()
    const [checked, setChecked] = useState(false);


    const handleCheck = () => setChecked(!checked);

    const handleBack = () => goBack()

    const onSignIn = () => {
        navigate(SCREENS.SIGN_IN as never)
    }

    return (
        <SafeAreaView>

            <View style={styles.container}>
                <View style={styles.header}>
                    <AuthHeader text="Sign Up" onBackPress={handleBack} />
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.formSection}>
                        <Input label="Name" placeholder="John Doe" />
                        <Input label="Email" placeholder="example@gmail.com" />
                        <Input secureTextEntry label="Password" placeholder="*******" />
                        <Checkbox checked={checked} handleCheck={handleCheck} text="I agree with Terms & Privacy" />
                        <Button text="Sign Up" />
                    </View>
                    <View style={styles.footer}>
                        <Separator text="Or sign up with" />
                        <GoogleLogin />
                    </View>

                    <Text style={styles.footerText}>
                        Already have an account?
                        <Text onPress={onSignIn} style={styles.footerLink}>
                            Sign In
                        </Text>
                    </Text>

                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

