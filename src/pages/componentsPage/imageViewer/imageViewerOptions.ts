import { defaultMainOption } from "@shared/constants/defaultOption";
import { PanelMainOption, PanelStoryOption } from "@shared/types/option";
import { IMAGEVIEWER_TRANSLATE_CODE } from "./code";

export const IMAGEVIEWER_DOC_PROPERTIES_OPTIONS: Array<PanelMainOption> = [
  {
    panelKey: "Name",
    isShow: true,
    panelType: "default",
    description: "Short description",
    examples: [],
    defaultExample: "Default",
  },
  {
    panelKey: "url",
    isShow: true,
    required: true,
    panelType: "default",
    description: "표출될 image의 url을 입력한다.",
    examples: [],
    defaultExample: "",
  },
];
export const IMAGEVIEWER_MAIN_OPTIONS: Array<PanelMainOption> = [
  defaultMainOption,
  {
    panelKey: "open",
    isShow: true,
    required: true,
    panelType: "default",
    description: "사용 메소드로 ImageViewer.open 의 형식으로 사용한다.",
    examples: [],
    defaultExample: "",
  },
  {
    panelKey: "url",
    isShow: true,
    required: true,
    panelType: "default",
    description: "표출될 image의 url을 입력한다.",
    examples: [],
    defaultExample: "",
  },
];

export const IMAGEVIEWER_STORY_OPTIONS: Array<PanelStoryOption> = [
  {
    storyCode: IMAGEVIEWER_TRANSLATE_CODE,
    storyDesc: "마우스 이동에 따른 이미지 이동 계산",
    storyLanguage: "javascript",
  },
];
