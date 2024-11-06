import { ChangeEvent } from "react";

export interface Option {
  label: string | number;
  value: string | number;
}

export interface PanelOption {
  panelKey: string;
  panelType: string;
  isShow: boolean;
  onColor?: string;
  onSwitch?: boolean;
  onSelect?: string;
  onChange?: (value?: string | boolean | number | ChangeEvent) => void;
}
