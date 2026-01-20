import { theme } from "@/constants/theme";
import React from "react";

import fonts from "@/constants/fonts";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Typography from "../Typography";
interface InputProps {
  placeholdertext: string;
  type: "password";
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  errorText?: string;
  error?: boolean;
  containerStyle?: ViewStyle;
}

const PasswordInput: React.FC<InputProps> = ({
  placeholdertext,
  type = "default",
  error = false,
  label,
  value,
  onChangeText,
  placeholder,
  errorText,
  containerStyle,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={[containerStyle]}>
      {label && (
        <Typography
          fontSize={12}
          fontFamily={fonts.medium}
          color={theme.colors.coolGray}
          marginVertical={5}
        >
          {label}
        </Typography>
      )}
      <TextInput
        placeholder={placeholdertext}
        secureTextEntry={!showPassword}
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor={theme.colors.black}
      />
      <View style={{ position: "absolute", right: 10, top: 25 }}>
        <TouchableOpacity onPress={handlePassword}>
           <Icon
            name={showPassword ? "eye" : "eye-off"}
            
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {errorText && (
        <Typography color={theme.colors.crimsonRed} fontSize={12} marginTop={2}>
          {errorText}
        </Typography>
      )}
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    // borderColor: theme.colors.charcoalGray,
    paddingHorizontal: 14,
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    color: theme.colors.white,
    position: "relative",
  },
  icon: {
    padding: 5,
  },
});
