import { PanelOption } from "@shared/types/option";

export const flipPosition = (
  flipController: boolean,
  options: Array<PanelOption>,
) => {
  const optionsLength = options.length;

  if (flipController) {
    return `calc(-50% + 40px)`;
  }
  if (optionsLength >= 5) {
    return "40px";
  }
  if (optionsLength === 1) {
    return `calc(-45% + 40px)`;
  }
  return `calc(-${50 - (5 + (optionsLength - 1) * (45 / 4))}% + 40px)`;
};
