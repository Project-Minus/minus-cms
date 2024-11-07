export const flipPosition = (flipController: boolean, tabKey: string) => {
  if (flipController) {
    return `calc(-50% + 40px)`;
  }
  if (tabKey === "docs") {
    return `calc(50%)`;
  }
  return "40px";
};
