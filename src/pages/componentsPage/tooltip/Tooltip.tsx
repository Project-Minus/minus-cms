import ControlPanel from "@widgets/controlPanel/ControlPanel";
import SpeechBubbleBox from "@widgets/speechBubble/SpeechBubbleBox/SpeechBubbleBox";
import { TooltipPosition } from "@widgets/speechBubble/type";

import "./tooltip.scss";
import { useMemo, useState } from "react";

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
  const [size, setSize] = useState<string>("small");
  const [ellipsis, setEllipsis] = useState<string>("100px");

  const options = useMemo(() => {
    const handleToggle = () => {
      if (ellipsis === "100px") {
        setEllipsis("150px");
        return;
      }
      setEllipsis("100px");
    };

    return [
      {
        panelKey: "textColor",
        isShow: true,
        panelType: "color",
        onColor: textColor,
        onChange: (color) => {
          setTextColor(color as string);
        },
      },
      {
        panelKey: "backgroundColor",
        isShow: true,
        panelType: "color",
        onColor: backgroundColor,
        onChange: (color) => {
          setBackgroundColor(color as string);
        },
      },
      {
        panelKey: "size",
        isShow: true,
        panelType: "select",
        onSelect: size,
        onChange: (value) => {
          setSize(value as string);
        },
      },
      {
        panelKey: "ellipsis",
        isShow: true,
        panelType: "switch",
        onSwitch: ellipsis === "100px",
        onChange: handleToggle,
      },
    ];
  }, [size, ellipsis, textColor, backgroundColor]);

  return (
    <ControlPanel options={options}>
      <div className="tooltip-grid">
        {gridItem.map((item) => {
          return (
            <div className="grid-item">
              <div className="grid-item-bubble" style={{ width: ellipsis }}>
                <SpeechBubbleBox
                  contents={item}
                  bubbleContents={item}
                  position={item}
                  size={size}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  checkOverflow={ellipsis === "100px"}
                  boxContentStyle={{
                    fontWeight: 500,
                    color: "rgba(255,255,255,1)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ControlPanel>
  );
}
