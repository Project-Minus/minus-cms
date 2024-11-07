import {
  Select as MUISelect,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { Option } from "@shared/types/option";

interface Props {
  selectKey: string;
  value: string | number;
  options: Array<Option>;
  onChange: (value: string) => void;
}
export default function Select(props: Props) {
  const { selectKey, value, options, onChange } = props;
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        {/* <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel> */}
        <MUISelect
          key={selectKey}
          displayEmpty
          input={<OutlinedInput />}
          value={value}
          label="Age"
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option, index) => {
            const optionsKey = `${option.label}-${index}`;

            return (
              <MenuItem key={optionsKey} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </MUISelect>
      </FormControl>
    </Box>
  );
}
