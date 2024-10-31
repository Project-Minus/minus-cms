import { Switch as MUISwitch } from "@mui/material";

interface Props {
  switchKey?: string;
  checked: boolean;
  onChange: () => void;
}
export default function Switch(props: Props) {
  const { switchKey, checked, onChange } = props;
  const label = { inputProps: { "aria-label": switchKey ?? "switch" } };

  return (
    <MUISwitch
      {...label}
      edge="end"
      onChange={onChange}
      checked={checked}
      inputProps={{
        "aria-labelledby": "switch-list-label-wifi",
      }}
    />
  );
}
