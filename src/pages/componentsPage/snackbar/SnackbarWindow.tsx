import SnackBar from "@widgets/snackBar/SnackBar";

export default function TooltipWindow() {
  const snackbarItem: Array<string> = [
    "show",
    "info",
    "success",
    "warning",
    "error",
    "reset",
  ];
  const getSnackbarMethod = (item: string) => {
    switch (item) {
      case "show":
        return SnackBar.show({ message: "Show Snackbar!" });
      case "info":
        return SnackBar.info({ message: "Info Snackbar!" });
      case "success":
        return SnackBar.success({ message: "Success Snackbar!" });
      case "warning":
        return SnackBar.warning({ message: "Warning Snackbar!" });
      case "error":
        return SnackBar.error({ message: "Error Snackbar!" });
      case "reset":
        return SnackBar.unmount();
    }
  };
  return (
    <div className="snackbar-window-wrapper">
      {snackbarItem.map((item, index) => {
        const key = `snackbar-${index}`;
        const clickButton = () => {
          getSnackbarMethod(item);
        };
        return (
          <div className="snackbar-window" key={key}>
            <button onClick={clickButton}>{item}</button>
          </div>
        );
      })}
    </div>
  );
}
