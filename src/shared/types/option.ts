import { ChangeEvent } from "react";

export interface Option {
  label: string | number;
  value: string | number;
}

export interface PanelControlOption {
  panelKey: string;
  panelType: string;
  isShow: boolean;
  required?: boolean;
  onColor?: string;
  onSwitch?: boolean;
  onSelect?: string;
  onChange?: (value?: string | boolean | number | ChangeEvent) => void;
}
export interface PanelMainOption {
  panelKey: string;
  panelType: string | null;
  isShow: boolean;
  required?: boolean;
  description?: string;
  examples?: Array<string>;
  defaultExample?: string;
}

export interface PanelStoryOption {
  storyCode: string;
  storyDesc?: string;
  storyLanguage?: string;
}

export interface PanelOptions extends PanelControlOption, PanelMainOption {}

export interface WriteArticleOptions {
  label: string;
  value: string;
}
