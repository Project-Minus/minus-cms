import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Editor } from "@toast-ui/react-editor";
import { Dayjs } from "dayjs";
import { useState } from "react";

export const WriteArticle = () => {
  const { palette } = useTheme();
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        width: "100%",
        height: "100%",
        background: palette?.mode === "light" ? "#FFF" : "#121212",
      }}
    >
      {/* Title & date Area */}
      <Box
        className="TitleAndDateWrapper"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
          minWidth: 927,
          maxWidth: 927,
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue="Hello World"
          sx={{
            minWidth: 650,
            " .css-6ou73t-MuiInputBase-root-MuiOutlinedInput-root": {
              marginTop: "8px",
            },
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="Select Day"
              showDaysOutsideCurrentMonth
              value={currentDate}
              onChange={(newDate) => setCurrentDate(newDate)}
              sx={{
                maxWidth: 150,
                // height: 64,
                " .MuiStack-root": {
                  background: "red",
                  // height: 64,
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>

      <div
        className={`editor-panel-editor${palette?.mode === "dark" ? " toastui-editor-dark" : ""}`}
      >
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        ></Editor>
      </div>
    </Box>
  );
};
