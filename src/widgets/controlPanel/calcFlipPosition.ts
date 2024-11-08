export const flipPosition = (flipController: boolean, tabKey: string) => {
  if (flipController) {
    if (tabKey === "docs") {
      return `calc(-100% + 60px)`;
    }
    return `calc(-50% + 60px)`;
  }
  if (tabKey === "docs") {
    return `0px`;
  }
  return "0px";
};
