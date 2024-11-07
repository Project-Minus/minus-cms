import { useTheme } from "@mui/material";

export const useGetTheme = () => {
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.background.paper;
  const themeColorStyle = {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : theme.palette.background.paper,
    color: theme.palette.text.primary,
  };

  return { textColor, backgroundColor, themeColorStyle };
};
