import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { Box, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

  const [category, setCategory] = useState<string>("");

  const handleChange = (e: SelectChangeEvent) => {
    const value = e.target.value;

    setCategory(value);
  };

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
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "center",
          minWidth: 927,
          maxWidth: 927,
          height: 150,
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <TextField
            required
            inputProps={{
              maxLength: 44,
            }}
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
                format="YYYY-MM-DD"
                label="Select Day"
                showDaysOutsideCurrentMonth
                value={currentDate}
                onChange={(newDate) => setCurrentDate(newDate)}
                sx={{
                  maxWidth: 150,
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0 20px",
            alignItems: "center",
          }}
        >
          {/* Category */}
          <Box sx={{ minWidth: 150, maxWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={10}>App</MenuItem>
                <MenuItem value={20}>Front</MenuItem>
                <MenuItem value={30}>Back</MenuItem>
                <MenuItem value={30}>Infra</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* Sub Category */}
          <Box sx={{ minWidth: 150, maxWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Sub Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ios</MenuItem>
                <MenuItem value={20}>Android</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
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
        />
      </div>
    </Box>
  );
};
