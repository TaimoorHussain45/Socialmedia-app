import Icon from "@/assets/icons";
import { theme } from "@/constants/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  name?: string;
  style?: ViewStyle;
  onPress: () => void;
}

const BackButton: React.FC<ButtonProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Icon name="ArrowLeft" color={theme.colors.black} size={24} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.gainsboro,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
