import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Editor from "@widgets/editor/Editor";

export const WriteArticle = () => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 5,
        width: "100%",
        height: "100%",
        background: palette?.mode === "light" ? "#FFF" : "#121212",
      }}
    >
      <div
        className={`editor-panel-editor${palette?.mode === "dark" ? " toastui-editor-dark" : ""}`}
      >
        <Editor />
      </div>
    </Box>
  );
};
