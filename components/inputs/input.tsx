import Icon from "@/assets/icons/index";
import fonts from "@/constants/fonts";
import { theme } from "@/constants/theme";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { Metrics } from "@/constants/metrics";
import Typography from "../Typography";

interface InputProps {
  type?: "default" | "email-address" | "password";
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  errorText?: string;
  error?: boolean;
  containerStyle?: ViewStyle;
  iconName?: string;
  iconColor?: string;
  placeholdertext?: string; // For backward compatibility
}

const Input: React.FC<InputProps> = ({
  type = "default",
  error = false,
  label,
  iconName,
  value,
  iconColor,
  onChangeText,
  placeholder,
  errorText,
  containerStyle,
  placeholdertext,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = type === "password";
  const secureTextEntry = isPassword && !isPasswordVisible;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Typography
          fontSize={12}
          fontFamily={fonts.medium}
          color={theme.colors.black}
          marginVertical={5}
        >
          {label}
        </Typography>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder || placeholdertext}
          value={value}
          onChangeText={onChangeText}
          keyboardType={isPassword ? "default" : type}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={theme.colors.black}
          style={[
            styles.input,
            {
              paddingLeft: iconName || isPassword ? 40 : 14,
              paddingRight: isPassword ? 40 : 14,
            },
          ]}
        />
        {iconName && (
          <View style={styles.iconContainer}>
            <Icon name={iconName} color={iconColor} />
          </View>
        )}
        {isPassword && (
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icon
              name={isPasswordVisible ? "eyeOff" : "eye"}
              color={theme.colors.textLight}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>

      {errorText && (
        <Typography color={theme.colors.rose} fontSize={12} marginTop={2}>
          {errorText}
        </Typography>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 2,
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 14,
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    color: theme.colors.black,
  },
  iconContainer: {
    position: "absolute",
    left: Metrics.spacingRegular,
    top: Metrics.spacingRegular,
  },
  eyeIconContainer: {
    position: "absolute",
    right: Metrics.spacingRegular,
    top: Metrics.spacingMedium,
  },
});
