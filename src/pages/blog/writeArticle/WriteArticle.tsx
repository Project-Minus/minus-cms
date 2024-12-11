import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { postBlogWriteData } from "@app/supabase/init";
import { useGetTable } from "@app/supabase/useGetTable";
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
import { Category } from "@shared/types/tableType";
import Editor from "@widgets/editor/Editor";
import { Dayjs } from "dayjs";

import { useMemo, useState } from "react";

import "./writeArticle.scss";
import { useNavigate } from "react-router-dom";

export const WriteArticle = () => {
  const navigate = useNavigate();
  const { palette } = useTheme();
  const { data: categoryData } = useGetTable<Category>("category");

  const [titleValue, setTitleValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string>("");

  const [currentDate, setCurrentDate] = useState<Dayjs | null>(null);

  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const subCategoryList = useMemo(() => {
    return categoryData?.filter((data) => data.name === category)?.[0]
      ?.sub_category;
  }, [categoryData, category]);

  const handleChangeContents = (contents: string) => {
    setContentValue(contents);
  };

  const handleChangeCategory = (e: SelectChangeEvent) => {
    const value = e.target.value;

    setCategory(value);
  };

  const handleChangeSubCategory = (e: SelectChangeEvent) => {
    const value = e.target.value;

    setSubCategory(value);
  };

  const successPost = () => {
    window.alert("post 성공!");
    navigate("/blog/list-article");
  };
  const failedPost = () => {
    window.alert("post 실패!");
  };
  const handlePost = () => {
    const data = {
      title: titleValue,
      description: contentValue,
      created_at: currentDate,
      category: subCategory,
    };
    postBlogWriteData(data, successPost, failedPost);
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
            value={titleValue}
            onChange={(e) => {
              const value = e.target.value;
              setTitleValue(value);
            }}
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
                onChange={handleChangeCategory}
              >
                {categoryData
                  ?.map((category) => category.name)
                  ?.map((name) => {
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
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
                value={subCategory}
                label="Category"
                onChange={handleChangeSubCategory}
                disabled={!category}
              >
                {subCategoryList?.map((subCategory) => {
                  return <MenuItem value={subCategory}>{subCategory}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <div
        className={`editor-panel-editor${palette?.mode === "dark" ? " toastui-editor-dark" : ""}`}
      >
        <Editor
          changeContents={handleChangeContents}
          initialValue=" "
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
      </div>
      <div className="post-btn-box">
        <button className="post-btn" onClick={handlePost}>
          Post
        </button>
      </div>
    </Box>
  );
};
