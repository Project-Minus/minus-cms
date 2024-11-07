import { colors } from "@shared/constants/color";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import Select from "@shared/select/Select";
import Switch from "@shared/switch/Switch";
import { PanelControlOption } from "@shared/types/option";
import "./controlTabOptions.scss";

interface Props {
  options: Array<PanelControlOption>;
}
export default function ControlTabOption(props: Props) {
  const { options } = props;
  const { themeColorStyle } = useGetTheme();
  const sizeOptions = [
    { label: "small", value: "small" },
    { label: "medium", value: "medium" },
    { label: "large", value: "large" },
    { label: "extraLarge", value: "extraLarge" },
  ];

  return (
    <>
      {options.map((option, index) => {
        const {
          panelKey,
          isShow,
          panelType,
          onColor,
          onSwitch,
          onSelect,
          onChange,
        } = option;
        const defaultCalss = panelType === "default" ? " default-content" : "";
        const key = `${panelKey}-${index}`;

        if (!isShow) {
          return;
        }
        return (
          <div
            key={key}
            className={`controller-content${defaultCalss}`}
            style={themeColorStyle}
          >
            <p className="controller-control-name" style={themeColorStyle}>
              {panelKey}
            </p>
            {panelType === "color" && (
              <div className="color-box">
                {colors.map((color, index) => {
                  const colorKey = `${color}-${index}`;
                  const opacity =
                    onColor === color ? { opacity: 1 } : { opacity: 0.3 };

                  return (
                    <div
                      key={colorKey}
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
                <Select
                  selectKey={`ellipsis-select-${index}`}
                  value={onSelect}
                  options={sizeOptions}
                  onChange={onChange}
                />
              </div>
            )}
            {panelType === "switch" && (
              <div className="control-control-selector">
                <Switch
                  switchKey={`ellipsis-switch-${index}`}
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
      })}
    </>
  );
}
