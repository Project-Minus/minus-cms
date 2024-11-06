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
  const [size, setSize] = useState<string>("medium");
  const [ellipsis, setEllipsis] = useState<string>("90px");

  const options = useMemo(() => {
    const handleToggle = () => {
      if (ellipsis === "90px") {
        setEllipsis("130px");
        return;
      }
      setEllipsis("90px");
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
        onSwitch: ellipsis === "90px",
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
                  checkOverflow={ellipsis === "90px"}
                  boxContentStyle={{
                    fontWeight: 500,
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
