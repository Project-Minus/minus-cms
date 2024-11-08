import { PanelControlOption, PanelMainOption } from "@shared/types/option";

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
