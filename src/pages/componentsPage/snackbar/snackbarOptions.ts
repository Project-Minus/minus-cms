import { defaultMainOption } from "@shared/constants/defaultOption";
import { PanelMainOption, PanelStoryOption } from "@shared/types/option";
import { SNACKBAR_UNMOUNT_CODE } from "./code";

export const SNACKBAR_DOC_PROPERTIES_OPTIONS: Array<PanelMainOption> = [
  {
    panelKey: "Name",
    isShow: true,
    panelType: "default",
    description: "Short description",
    examples: [],
    defaultExample: "Default",
  },
  {
    panelKey: "message",
    isShow: true,
    required: true,
    panelType: "default",
    description: "Snackbar 안에 표출될 내용을 지정합니다.",
    examples: [],
    defaultExample: "",
  },
  {
    panelKey: "snackbarPosition",
    isShow: true,
    required: false,
    panelType: "default",
    description: "Snackbar가 출력될 위치를 지정합니다.",
    examples: [],
    defaultExample: "top",
  },
  {
    panelKey: "status",
    isShow: true,
    panelType: "default",
    description: "Snackbar의 상태를 지정할 수 있습니다.",
    examples: [],
    defaultExample: "show",
  },
  {
    panelKey: "maxCount",
    isShow: true,
    panelType: "default",
    description: "한번에 출력될 수 있는 Snackbar의 개수를 설정합니다.",
    examples: [],
    defaultExample: "infinity",
  },
  {
    panelKey: "icons",
    isShow: true,
    panelType: "default",
    description: "Snackbar 맨 앞에 출력될 icon을 선택합니다.",
    examples: [],
    defaultExample: "X",
  },
  {
    panelKey: "autoClose",
    isShow: true,
    panelType: "default",
    description: "일정 시간 후 Snackbar가 자동으로 닫히게 할지 선택합니다.",
    examples: [],
    defaultExample: "true",
  },
  {
    panelKey: "autoCloseTime",
    isShow: true,
    panelType: "default",
    description:
      "설정한 시간 뒤에 Snackbar가 자동으로 닫힙니다.(s,ms 단위로 사용)",
    examples: [],
    defaultExample: "2s",
  },
  {
    panelKey: "CSSProperties",
    isShow: true,
    panelType: "default",
    description: "css 속성을 사용하여 원하는 style로 변경합니다.",
    examples: [],
    defaultExample: "X",
  },
];
export const SNACKBAR_MAIN_OPTIONS: Array<PanelMainOption> = [
  defaultMainOption,
  {
    panelKey: "Message",
    isShow: true,
    panelType: null,
    description: "Snackbar 안에 표출될 내용을 지정합니다.",
    examples: ["ReactNode"],
    defaultExample: "It's snack bar",
  },
  {
    panelKey: "SnackbarPosition",
    isShow: true,
    panelType: null,
    description: "6가지 속성에 따라 Snackbar가 표출될 위치를 선택합니다.",
    examples: [
      '"left-top"',
      '"top"',
      '"right-top"',
      '"left-bottom"',
      '"bottom"',
      '"right-bottom"',
    ],
    defaultExample: "top",
  },
  {
    panelKey: "Status",
    isShow: true,
    panelType: null,
    description: "5가지 속성에 따라 Snackbar의 기본 style을 선택합니다.",
    examples: ['"show"', '"info"', '"success"', '"warning"', '"error"'],
    defaultExample: "show",
  },
  {
    panelKey: "maxCount",
    isShow: true,
    panelType: null,
    description: "최대로 표출될수 있는는 Snackbar의 개수를 설정합니다.",
    examples: ["0", "1", "20", "100", "infinity"],
    defaultExample: "infinity",
  },
  {
    panelKey: "autoClose",
    isShow: true,
    panelType: null,
    description: "일정 시간 후 Snackbar가 자동으로 닫히게 할지 선택합니다.",
    examples: ["true", "false"],
    defaultExample: "true",
  },
  {
    panelKey: "autoCloseTime",
    isShow: true,
    panelType: null,
    description:
      "설정한 시간 뒤에 Snackbar가 자동으로 닫힙니다. s,ms 단위까지 전달해야 하며, autoClose가 true 일때만 사용됩니다.",
    examples: ["1000ms", "3s"],
    defaultExample: "2s",
  },
];

export const SNACKBAR_STORY_OPTIONS: Array<PanelStoryOption> = [
  {
    storyCode: SNACKBAR_UNMOUNT_CODE,
    storyDesc:
      "자동으로 닫히지 않게 설정된 snackbar unmount로직 (이벤트 루프를 넘기기 위해 setItmeout 설정, 사용하는 컴포넌트에서 호출해서 사용해야함)",
    storyLanguage: "javascript",
  },
];
