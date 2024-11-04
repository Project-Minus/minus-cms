import { Select as MUISelect, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Option } from "@shared/types/option";

interface Props {
  value: string | number;
  options: Array<Option>;
  placeholder: string;
  onChange: (value: string) => void;
}
export default function Select(props: Props) {
  const { value, placeholder, options, onChange } = props;
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <MUISelect
          labelId="demo-simple-MUISelect-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {options.map((option) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>;
          })}
        </MUISelect>
      </FormControl>
    </Box>
  );
}
