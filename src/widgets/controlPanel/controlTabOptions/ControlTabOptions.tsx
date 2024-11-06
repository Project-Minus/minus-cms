import { colors } from "@shared/constants/color";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import Select from "@shared/select/Select";
import Switch from "@shared/switch/Switch";
import { PanelOption } from "@shared/types/option";
import "./controlTabOptions.scss";

export default function ControlTabOption(props: PanelOption) {
  const { panelKey, isShow, panelType, onColor, onSwitch, onSelect, onChange } =
    props;
  const { themeColorStyle } = useGetTheme();
  const defaultCalss = panelType === "default" ? " default-content" : "";
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
    <div
      className={`controller-content${defaultCalss}`}
      style={themeColorStyle}
    >
      <p className="controller-control-name" style={themeColorStyle}>
        {panelKey}
      </p>
      {panelType === "color" && (
        <div className="color-box">
          {colors.map((color) => {
            const opacity =
              onColor === color ? { opacity: 1 } : { opacity: 0.3 };

            return (
              <div
                onClick={() => {
                  onChange(color);
                }}
                style={{
                  backgroundColor: color,
                  ...opacity,
                }}
              ></div>
            );
          })}
        </div>
      )}
      {panelType === "select" && (
        <div className="control-control-selector">
          <Select value={onSelect} options={sizeOptions} onChange={onChange} />
        </div>
      )}
      {panelType === "switch" && (
        <div className="control-control-selector">
          <Switch
            switchKey="ellipsis-switch"
            checked={onSwitch}
            onChange={onChange}
          />
        </div>
      )}
      {panelType === "default" && (
        <div className="control-control-default">Control</div>
      )}
    </div>
  );
}
