import { PanelMainOption } from "@shared/types/option";

export const TOOLTIP_CODE = `
<div className="bubble-box-wrapper">
  <SpeechBubbleBox
    contents="It's tooltip!"
    bubbleContents="It's tooltip in speechBubble!"
    size={"medium"}
    textColor="red"
    backgroundColor="blue"
    checkOverflow={false}
    boxContentStyle={{
      fontWeight: 500,
    }}
  />
</div>
`;
export const defaultMainOption: PanelMainOption = {
  panelKey: "Name",
  isShow: true,
  panelType: "default",
  description: "Description",
  examples: [],
  defaultExample: "Default",
};

export const TOOLTIP_DOC_OPTIONS: Array<PanelMainOption> = [
  {
    panelKey: "Name",
    isShow: true,
    panelType: "default",
    description: "Short description",
    examples: [],
    defaultExample: "Default",
  },
  {
    panelKey: "contents",
    isShow: true,
    panelType: "default",
    description: "hover 이벤트가 일어날 요소를 지정합니다",
    examples: [],
    defaultExample: "",
  },
  {
    panelKey: "bubbleContents",
    isShow: true,
    panelType: "default",
    description: "말풍선 속에 표출될 내용을 지정합니다",
    examples: [],
    defaultExample: "",
  },
  {
    panelKey: "position",
    isShow: true,
    panelType: "default",
    description: "8가지 속성에 따라 말풍선의 위치를 변경할 수 있습니다",
    examples: [],
    defaultExample: "top",
  },
  {
    panelKey: "textColor",
    isShow: true,
    panelType: "default",
    description: "말풍선 속 텍스트 색을 변경할 수 있습니다",
    examples: [],
    defaultExample: "#FFFFFF",
  },

  {
    panelKey: "backgroundColor",
    isShow: true,
    panelType: "default",
    description: "말풍선의 배경 색을 변경할 수 있습니다",
    examples: [],
    defaultExample: "#313131",
  },
  {
    panelKey: "size",
    isShow: true,
    panelType: "default",
    description: "말풍선의 크기를 4가지 속성을 사용하여 변경할 수 있습니다",
    examples: [],
    defaultExample: "medium",
  },
  {
    panelKey: "isTail",
    isShow: true,
    panelType: "default",
    description: "이 속성을 false로 설정하면, 말풍선 꼬리가 표출되지 않습니다",
    examples: [],
    defaultExample: "true",
  },
  {
    panelKey: "isShowBubble",
    isShow: true,
    panelType: "default",
    description: "이 속성을 false로 설정하면, 말풍선이 나오지 않습니다",
    examples: [],
    defaultExample: "true",
  },
  {
    panelKey: "isDraggable",
    isShow: true,
    panelType: "default",
    description:
      "이 속성을 true 설정하면, 말풍선 속 내용을 drag 할 수 있습니다",
    examples: [],
    defaultExample: "false",
  },
  {
    panelKey: "checkOverflow",
    isShow: true,
    panelType: "default",
    description:
      "이 속성을 true 설정하면, 말줄임 처리가 되어있는 요소만 말풍선이 표출됩니다",
    examples: [],
    defaultExample: "true",
  },
  {
    panelKey: "boxStyle",
    isShow: true,
    panelType: "default",
    description: "해당 요소를 감싸고 있는 상위 요소의 스타일을 직접 수정합니다",
    examples: [],
    defaultExample: "{ }",
  },
  {
    panelKey: "boxContentStyle",
    isShow: true,
    panelType: "default",
    description: "hover 이벤트가 일어나는 요소의 스타일을 직접 수정합니다",
    examples: [],
    defaultExample: "{ }",
  },
];
export const TOOLTIP_MAIN_OPTIONS: Array<PanelMainOption> = [
  defaultMainOption,
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
    ],
    defaultExample: "top",
  },
];
