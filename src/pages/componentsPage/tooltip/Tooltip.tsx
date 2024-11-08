import { PanelControlOption } from "@shared/types/option";
import ControlPanelView from "@widgets/controlPanel/controlPanelView/ControlPanelView";
import SpeechBubbleBox from "@widgets/speechBubble/speechBubbleBox/SpeechBubbleBox";
import { TooltipPosition } from "@widgets/speechBubble/type";
import { useCallback, useMemo, useState } from "react";
import { TOOLTIP_MAIN_OPTIONS } from "./options";
import "./tooltip.scss";

export default function Tooltip() {
  const gridItem: Array<TooltipPosition> = [
    "left-top",
    "top",
    "right-top",
    "left",
    "" as TooltipPosition,
    "right",
    "left-bottom",
    "bottom",
    "right-bottom",
  ];

  const [textColor, setTextColor] = useState<string>("default");
  const [backgroundColor, setBackgroundColor] = useState<string>("default");
  const [size, setSize] = useState<string>("medium");
  const [ellipsis, setEllipsis] = useState<string>("95px");
  const handleToggle = useCallback(() => {
    if (ellipsis === "95px") {
      setEllipsis("130px");
      return;
    }
    setEllipsis("95px");
  }, [ellipsis]);

  const controlOptions: Array<PanelControlOption> = useMemo(() => {
    return [
      {
        panelKey: "Color",
        isShow: true,
        panelType: "color",
        onColor: textColor,
        onChange: (color) => {
          setTextColor(color as string);
        },
      },
      {
        panelKey: "Background",
        isShow: true,
        panelType: "color",
        onColor: backgroundColor,
        onChange: (color) => {
          setBackgroundColor(color as string);
        },
      },
      {
        panelKey: "Size",
        isShow: true,
        panelType: "select",
        onSelect: size,
        onChange: (value) => {
          setSize(value as string);
        },
      },
      {
        panelKey: "Ellipsis",
        isShow: true,
        panelType: "switch",
        onSwitch: ellipsis === "95px",
        onChange: handleToggle,
      },
    ];
  }, [size, ellipsis, textColor, backgroundColor, handleToggle]);

  return (
    <ControlPanelView
      controlOptions={controlOptions}
      mainOptions={TOOLTIP_MAIN_OPTIONS}
    >
      <div className="tooltip-grid">
        {gridItem.map((item, index) => {
          const key = `tooltip-grid-${index}`;

          return (
            <div className="grid-item" key={key}>
              <div className="grid-item-bubble" style={{ width: ellipsis }}>
                <SpeechBubbleBox
                  contents={item}
                  bubbleContents={item}
                  position={item}
                  size={size}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  checkOverflow={ellipsis === "95px"}
                  boxContentStyle={{
                    fontWeight: 500,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ControlPanelView>
  );
}
