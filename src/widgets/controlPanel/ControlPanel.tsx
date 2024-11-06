import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { colors } from "@shared/constants/color";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import Select from "@shared/select/Select";
import Switch from "@shared/switch/Switch";
import { PanelOption } from "@shared/types/option";
import { ReactNode, useState } from "react";
import "./controlPanel.scss";

function ControlPanelOption(props: PanelOption) {
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
      <p style={themeColorStyle}>{panelKey}</p>
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
        <div className="control-selector">
          <Select value={onSelect} options={sizeOptions} onChange={onChange} />
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
      {panelType === "default" && (
        <div className="control-default">Control</div>
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
  const [filpController, setFlipController] = useState<boolean>(true);
  const optionsAddDefault = [
    {
      panelKey: "Name",
      isShow: true,
      panelType: "default",
      onChange: () => {},
    },
    ...options,
  ];
  const filpClass = filpController ? "flip" : "non-flip";
  const filpPosition = () => {
    const optionsLength = optionsAddDefault.length;

    if (filpController) {
      return `calc(-50% + 40px)`;
    }
    if (optionsLength >= 5) {
      return "40px";
    }
    if (optionsLength === 1) {
      return `calc(-45% + 40px)`;
    }
    return `calc(-${50 - (5 + (optionsLength - 1) * (45 / 4))}% + 40px)`;
  };

  return (
    <div className="control-panel">
      <div className="panel-view">{children}</div>
      <div
        className={`controller ${filpClass}`}
        style={{ bottom: filpPosition() }}
      >
        <div className="controller-header">
          <OpenInBrowserIcon
            onClick={() => {
              setFlipController((prev) => !prev);
            }}
          />
        </div>
        <div className="controller-content-wrapper">
          {optionsAddDefault.map(
            ({
              panelKey,
              isShow,
              panelType,
              onColor,
              onSwitch,
              onSelect,
              onChange,
            }) => {
              return (
                <ControlPanelOption
                  panelKey={panelKey}
                  isShow={isShow}
                  panelType={panelType}
                  onColor={onColor}
                  onSwitch={onSwitch}
                  onSelect={onSelect}
                  onChange={onChange}
                />
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
