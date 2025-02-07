import { colorContext } from "@App";
import { useContext } from "react";

export const useColorThemeStyle = () => {
  const colorScheme = useContext(colorContext);
  return {
    logo: {
      filter:
        colorScheme === "dark"
          ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(103deg)"
          : "",
    },
  };
};
