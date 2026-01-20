import CustomButton from "@/components/Buttons/CustomButton";
import Input from "@/components/inputs/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import fonts from "@/constants/fonts";
import { Metrics } from "@/constants/metrics";
import { theme } from "@/constants/theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface FormData {
  email: string;
  password: string;
}

const initialFormData: FormData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const updateField = (key: keyof FormData, value: any) => {
    // console.log(`Updating ${key}:`, value);
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };
  return (
    <ScreenWrapper bg={theme.colors.white}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Typography
            fontSize={Metrics.fontSizeXXLarge}
            fontFamily={fonts.semiBold}
          >
            Hey,
          </Typography>
          <Typography
            fontSize={Metrics.fontSizeXXLarge}
            fontFamily={fonts.semiBold}
          >
            Welcome back
          </Typography>
          <Typography color={theme.colors.text}>
            Please login to Continue
          </Typography>
          <Input
            placeholder="Enter your email"
            type="email-address"
            value={formData.email}
            onChangeText={(text) => updateField("email", text)}
            iconName="mail"
            errorText={errors.email}
            iconColor={theme.colors.crimsonRed}
          />
          <Input
            placeholder="Enter your Password"
            type="password"
            iconName="lock"
            value={formData.password}
            errorText={errors.password}
            onChangeText={(text) => updateField("password", text)}
            iconColor={theme.colors.crimsonRed}
          />
          <Typography textAlign="right">Forgot Password</Typography>
          <CustomButton title="Login" style={styles.customButton} />
          <View style={styles.signUp}>
            <Typography>Don't have an account? </Typography>
            <Typography fontFamily={fonts.semiBold}>Sign Up</Typography>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ForgotPassword: {
    textAlign: "right",
    color: theme.colors.crimsonRed,
    fontSize: 12,
    fontFamily: fonts.semiBold,
  },
  inputContainer: {
    marginVertical: 15,
    gap: 2,
  },
  passwordContainer: {
    marginVertical: 15,
    gap: 3,
  },
  customButton: {
    marginTop: 20,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginBottom: 20,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    gap: Metrics.spacingTiny,
    marginVertical: 20,
  },
});
