import { PanelControlOption, PanelMainOption } from "@shared/types/option";
import ControlPanelView from "@widgets/controlPanel/controlPanelView/ControlPanelView";
import SpeechBubbleBox from "@widgets/speechBubble/SpeechBubbleBox/SpeechBubbleBox";
import { TooltipPosition } from "@widgets/speechBubble/type";
import { useCallback, useMemo, useState } from "react";
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

  const mainOptions: Array<PanelMainOption> = [
    {
      panelKey: "Color",
      isShow: true,
      panelType: null,
      description: "말풍선 속 텍스트 색을 변경할 수 있습니다",
      examples: ["string", "number"],
      defaultExample: "#FFFFFF",
    },
    {
      panelKey: "Background",
      isShow: true,
      panelType: null,
      description: "말풍선의 배경 색을 변경할 수 있습니다",
      examples: ["string", "boolean", "Array<string>"],
      defaultExample: "#313131",
    },
    {
      panelKey: "Size",
      isShow: true,
      panelType: null,
      description: "말풍선의 크기를 4가지 속성을 사용하여 변경할 수 있습니다",
      examples: ['"small"', '"medium"', '"large"', '"extraLarge"'],
      defaultExample: "medium",
    },
    {
      panelKey: "Ellipsis",
      isShow: true,
      panelType: null,
      description:
        "이 속성을 true로 설정하면, 말줄임 표시가 되어있는 요소만 말풍선이 나타납니다",
      examples: ["boolean"],
      defaultExample: "true",
    },
    {
      panelKey: "position",
      isShow: true,
      panelType: null,
      description: "8가지 속성에 따라 말풍선의 위치를 변경할 수 있습니다",
      examples: [
        '"left-top"',
        '"top"',
        '"right-top"',
        '"left"',
        '"right"',
        '"left-bottom"',
        '"bottom"',
        '"right-bottom"',
        '"right-bottom"',
        '"right-bottom"',
        '"right-bottom"',
      ],
      defaultExample: "top",
    },
  ];

  return (
    <ControlPanelView controlOptions={controlOptions} mainOptions={mainOptions}>
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
