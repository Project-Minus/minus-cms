import { useTheme } from "@mui/material";
import { colors } from "@shared/constants/color";
import "./controlPanel.scss";
import Select from "@shared/select/Select";
import Switch from "@shared/switch/Switch";
import { PanelOption } from "@shared/types/option";
import { ReactNode } from "react";

function ControlPanelOption(props: PanelOption) {
  const { panelKey, isShow, panelType, onSwitch, onSelect, onChange } = props;
  const theme = useTheme();
  const sizeOptions = [
    { label: "small", value: "small" },
    { label: "medium", value: "medium" },
    { label: "large", value: "large" },
    { label: "extraLarge", value: "extraLarge" },
  ];

  if (!isShow) {
    return;
  }
  return (
    <div className="controller-content">
      <p
        style={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {panelKey}
      </p>
      {panelType === "color" && (
        <div className="color-box">
          {colors.map((color) => {
            return (
              <div
                onClick={() => {
                  onChange(color);
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            );
          })}
        </div>
      )}
      {panelType === "select" && (
        <div className="control-selector">
          <Select
            value={onSelect}
            options={sizeOptions}
            placeholder="Size"
            onChange={onChange}
          />
        </div>
      )}
      {panelType === "switch" && (
        <div className="control-selector">
          <Switch
            switchKey="ellipsis-switch"
            checked={onSwitch}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
}

interface PanelProps {
  options: Array<PanelOption>;
  children: ReactNode;
}

export default function ControlPanel(props: PanelProps) {
  const { options, children } = props;

  return (
    <div className="control-panel">
      <div className="panel-view">{children}</div>
      <div className="controller">
        {options.map(
          ({ panelKey, isShow, panelType, onSwitch, onSelect, onChange }) => {
            console.log(onSwitch);
            return (
              <ControlPanelOption
                panelKey={panelKey}
                isShow={isShow}
                panelType={panelType}
                onSwitch={onSwitch}
                onSelect={onSelect}
                onChange={onChange}
              />
            );
          },
        )}
      </div>
    </div>
  );
}
