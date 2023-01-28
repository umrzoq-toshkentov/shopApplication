import { ActivityIndicator, ScrollView, Text, View } from "react-native";
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
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../api";
import { RegisterProps } from "../../../dto";

export const SignUp = () => {
    const { navigate, goBack } = useNavigation()
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState<Omit<RegisterProps, "confirmPassword">>({
        fullName: "",
        password: "",
        email: ""
    })

    const onSignIn = () => {
        navigate(SCREENS.SIGN_IN as never)
    }
    const signUp = useMutation((body: RegisterProps) => register(body), {
        onSuccess: () => {
            onSignIn()
        }
    })


    const handleCheck = () => setChecked(!checked);

    const handleBack = () => goBack()

    const onChangeText = (v: string, key: string) => {
        setValues((values) => ({
            ...values,
            [key]: v
        }))
    }

    const handleSubmit = () => {
        signUp.mutate({ ...values, confirmPassword: values.password })
    }

    return (
        <SafeAreaView>

            <View style={styles.container}>
                <View style={styles.header}>
                    <AuthHeader text="Sign Up" onBackPress={handleBack} />
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.formSection}>
                        <Input value={values.fullName} onChange={(v: string) => onChangeText(v, "fullName")} label="Name" placeholder="John Doe" />
                        <Input value={values.email} onChange={(v: string) => onChangeText(v, "email")} label="Email" placeholder="example@gmail.com" />
                        <Input value={values.password} onChange={(v: string) => onChangeText(v, "password")} secureTextEntry label="Password" placeholder="*******" />
                        <Checkbox checked={checked} handleCheck={handleCheck} text="I agree with Terms & Privacy" />
                        <Button handlePress={handleSubmit} disabled={!checked} text="Sign Up" />
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

                    {
                        signUp.isLoading ? <ActivityIndicator /> : null
                    }

                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

