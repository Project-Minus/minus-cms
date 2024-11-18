import {
  PanelControlOption,
  PanelMainOption,
  WriteArticleOptions,
} from "@shared/types/option";

export const defaultControlOption: PanelControlOption = {
  panelKey: "Name",
  isShow: true,
  panelType: "default",
  onChange: () => {},
};
export const defaultMainOption: PanelMainOption = {
  panelKey: "Name",
  isShow: true,
  panelType: "default",
  description: "Description",
  examples: [],
  defaultExample: "Default",
};

export const defaultWriteArticleOptions: WriteArticleOptions[] = [
  { label: "App", value: "App" },
  // Ios && Android
  { label: "Front", value: "Front" },
  // Css & JavaScript & TypeScript & React & NextJS
  { label: "Back", value: "Back" },
  // DB & Node & Next
  { label: "Infra", value: "Infra" },
  // Aws & Vercel ...
];

export const defaultWriteArticleSubOptions = {};
