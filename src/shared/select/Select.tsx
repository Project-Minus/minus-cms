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
  value: string | number;
  options: Array<Option>;
  onChange: (value: string) => void;
}
export default function Select(props: Props) {
  const { value, options, onChange } = props;
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        {/* <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel> */}
        <MUISelect
          displayEmpty
          input={<OutlinedInput />}
          labelId="demo-simple-MUISelect-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>;
          })}
        </MUISelect>
      </FormControl>
    </Box>
  );
}
