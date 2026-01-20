import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface IconProps {
  strokeWidth?: number;
  color?: string;
  width?: number;
  height?: number;
}

const Eye: React.FC<IconProps> = ({
  strokeWidth = 1.8,
  color = "#000",
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    color={color}
    {...props}
  >
    <Path
      d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default Eye;
