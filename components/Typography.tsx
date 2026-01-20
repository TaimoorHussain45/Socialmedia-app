import fonts from "@/constants/fonts";
import { theme } from "@/constants/theme";
import React from "react";
import { Text, TextStyle } from "react-native";
// type FontFamily = keyof typeof fonts;

interface TypographyProps {
  children: React.ReactNode;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  textAlign?: "left" | "center" | "right";
  numberOfLines?: number;
  marginTop?: number;
  marginBottom?: number;
  alignSelf?: string;
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  textStyle?: TextStyle;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  fontSize = 14,
  fontFamily = fonts.regular,
  color = theme.colors.black,
  textAlign = "left",
  numberOfLines,
  textStyle,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize,
          color,
          fontFamily,
          textAlign,
          marginTop: marginTop || 0,
          marginBottom: marginBottom || 0,
          marginLeft: marginLeft || 0,
          marginRight: marginRight || 0,
          marginVertical: marginVertical || 0,
        },
        textStyle,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;
