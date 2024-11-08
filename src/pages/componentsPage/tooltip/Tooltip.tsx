import { PanelControlOption } from "@shared/types/option";
import ControlPanelView from "@widgets/controlPanel/controlPanelView/ControlPanelView";
import SpeechBubbleBox from "@widgets/speechBubble/speechBubbleBox/SpeechBubbleBox";
import { TooltipPosition } from "@widgets/speechBubble/type";
import { useCallback, useMemo, useState } from "react";
import {
  TOOLTIP_DOCS_DESCRIPTION,
  TOOLTIP_DOCS_TITLE,
  TOOLTIP_WINDOW_CODE,
} from "./code";
import {
  TOOLTIP_DOC_PROPERTIES_OPTIONS,
  TOOLTIP_MAIN_OPTIONS,
  TOOLTIP_STORY_OPTIONS,
} from "./tooltipOptions";
import "./tooltip.scss";
import TooltipWindow from "./TooltipWindow";

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
  const [draggable, setDraggable] = useState<boolean>(false);
  const [tail, setTail] = useState<boolean>(true);
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
      {
        panelKey: "Draggable",
        isShow: true,
        panelType: "switch",
        onSwitch: draggable,
        onChange: () => {
          setDraggable((prev) => !prev);
        },
      },
      {
        panelKey: "Tail",
        isShow: true,
        panelType: "switch",
        onSwitch: tail,
        onChange: () => {
          setTail((prev) => !prev);
        },
      },
    ];
  }, [
    size,
    ellipsis,
    textColor,
    backgroundColor,
    draggable,
    tail,
    handleToggle,
  ]);

  return (
    <ControlPanelView
      docsTitle={TOOLTIP_DOCS_TITLE}
      docsDescription={TOOLTIP_DOCS_DESCRIPTION}
      docsWindowNode={<TooltipWindow />}
      docsWindowCode={TOOLTIP_WINDOW_CODE}
      propertiesOptions={TOOLTIP_DOC_PROPERTIES_OPTIONS}
      storyOptions={TOOLTIP_STORY_OPTIONS}
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
                  isDraggable={draggable}
                  isTail={tail}
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
