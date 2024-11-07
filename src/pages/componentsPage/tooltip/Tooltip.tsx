import ControlPanelView from "@widgets/controlPanel/controlPanelView/ControlPanelView";
import SpeechBubbleBox from "@widgets/speechBubble/SpeechBubbleBox/SpeechBubbleBox";
import { TooltipPosition } from "@widgets/speechBubble/type";
import { useMemo, useState } from "react";
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
  const [ellipsis, setEllipsis] = useState<string>("90px");

  const controlOptions = useMemo(() => {
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

  const docsOptions = [
    {
      panelKey: "Color",
      isShow: true,
      panelType: "",
      description: "test1",
      examples: ["string", "number"],
      defaultExample: "90px",
    },
    {
      panelKey: "Background",
      isShow: true,
      panelType: "",
      description: "test2",
      examples: ["string", "boolean", "Array<string>"],
      defaultExample: "red",
    },
    {
      panelKey: "size",
      isShow: true,
      panelType: "",
      description: "test3",
      examples: ['"small"', '"medium"', '"large"', '"extraLarge"'],
      defaultExample: "medium",
    },
    {
      panelKey: "ellipsis",
      isShow: true,
      panelType: "",
      description: "test4",
      examples: ["boolean"],
      defaultExample: "false",
    },
  ];

  return (
    <ControlPanelView controlOptions={controlOptions} docsOptions={docsOptions}>
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
    </ControlPanelView>
  );
}
