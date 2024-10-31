import WifiIcon from "@mui/icons-material/Wifi";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@shared/switch/Switch";
import { useState } from "react";

const dummyCategories = ["test1", "test2"];

interface Props {
  list: Array<string>;
  listHeader: string;
}
export default function SwitchList(props: Props) {
  const { list, listHeader } = props;
  const listItems = list?.length ? list : dummyCategories;
  const [checked, setChecked] = useState(["wifi"]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      subheader={<ListSubheader>{listHeader}</ListSubheader>}
    >
      {listItems?.map((item) => {
        return (
          <ListItem>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText id={`switch-list-label-${item}`} primary={item} />
            <Switch
              onChange={handleToggle(item)}
              checked={checked.includes(item)}
              switchKey={`switch-list-label-${item}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
