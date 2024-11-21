import { updateRow } from "@app/supabase/init";
import { useGetTableById } from "@app/supabase/useGetTableById";
import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Database } from "@shared/types/tableType";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./columns.scss";

interface DataValue {
  index: number;
  date?: Dayjs;
  value?: string;
  type?: string;
}

export default function Columns() {
  const { type: tableName, id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetTableById(tableName, "id", id);
  const [fields, setFields] = useState<Array<DataValue>>([]);

  const fieldNames = useMemo(() => {
    const currentData = data?.[0] ?? {};

    return Object.keys(currentData);
  }, [data]);

  const valueNames = useMemo(() => {
    const currentData = data?.[0] ?? {};

    return Object.values(currentData);
  }, [data]);

  const isValidDate = (value) => {
    // string으로 들어온 value가 date 인지 검증
    const timestamp = Date.parse(value);

    return !isNaN(timestamp);
  };

  const findDate = (dateArray: Array<DataValue>, index: number) => {
    return dateArray.find((el) => el.index === index)?.date;
  };

  const findText = (fieldArray: Array<DataValue>, index: number) => {
    return fieldArray.find((el) => el.index === index)?.value;
  };

  const onChangeFields = (
    fieldArray: Array<DataValue>,
    value: string | Dayjs,
    index: number,
    type: string,
  ) => {
    const copyFieldArray = [...fieldArray];

    if (findDate(fieldArray, index)) {
      const findIndex = copyFieldArray.findIndex((el) => el.index === index);

      copyFieldArray.splice(findIndex, 1, {
        date: value as Dayjs,
        index: index,
        type,
      });
      setFields(copyFieldArray);
      return;
    }
    const findIndex = copyFieldArray.findIndex((el) => el.index === index);

    copyFieldArray.splice(findIndex, 1, {
      value: value as string,
      index,
      type,
    });
    setFields(copyFieldArray);
  };

  const onClickPost = () => {
    const sendedData = {};
    const concatData = [...fields];

    fieldNames.forEach((el, index) => {
      const getRowData = () => {
        const dataType = concatData.find((data) => data.index === index)?.type;

        if (dataType === "date") {
          return concatData.find((data) => data.index === index)?.date;
        }
        if (dataType === "string") {
          return concatData.find((data) => data.index === index)?.value;
        }
        if (dataType === "array") {
          return concatData
            .find((data) => data.index === index)
            ?.value?.split(",");
        }
      };

      sendedData[el] = getRowData();
    });
    updateRow(tableName, sendedData as Database)
      .then(() => {
        alert("성공적으로 저장되었습니다");
        navigate("/tables");
      })
      .catch(console.error);
  };

  useEffect(() => {
    valueNames.forEach((el, index) => {
      if (isValidDate(el)) {
        setFields((prev) => [...prev, { date: dayjs(el as string), index }]);
        return;
      }
      if (Array.isArray(el)) {
        setFields((prev) => [
          ...prev,
          { value: el.join(","), index, type: "array" },
        ]);
        return;
      }
      setFields((prev) => [
        ...prev,
        { value: el as string, index, type: "string" },
      ]);
    });
  }, [valueNames]);
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p className="column-desc">
        * array : text,text,text,text...
        <br />위 예시처럼 array type은 텍스트 쉼표 텍스트를 붙여 쓰는 것으로
        변경 가능
      </p>
      {fieldNames.map((el, index) => {
        const arrayType = Array.isArray(valueNames[index]) ? "array" : "string";

        return (
          <div className="column-field">
            <p>
              <span>{el} </span>
              <span className={`${arrayType}-type`}>({arrayType})</span>
            </p>
            {isValidDate(valueNames[index]) ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    format="YYYY-MM-DD"
                    label="Select Day"
                    showDaysOutsideCurrentMonth
                    value={findDate(fields, index)}
                    onChange={(newDate) =>
                      onChangeFields(fields, newDate, index, "date")
                    }
                    sx={{
                      maxWidth: 150,
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            ) : (
              <textarea
                disabled={el === "id"}
                rows={5}
                value={findText(fields, index)}
                onChange={(e) => {
                  onChangeFields(fields, e.target.value, index, arrayType);
                }}
              />
            )}
          </div>
        );
      })}
      <button onClick={onClickPost}>변경</button>
    </Box>
  );
}
