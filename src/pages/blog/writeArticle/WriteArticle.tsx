import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Editor } from "@toast-ui/react-editor";

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
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
      </div>
    </Box>
  );
};
