import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowLeft = ({ size = 24, color = "#000", ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
    <Path
      d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowLeft;
