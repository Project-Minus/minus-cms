import { PanelControlOption } from "@shared/types/option";
import ControlPanelView from "@widgets/controlPanel/controlPanelView/ControlPanelView";
import SnackBar from "@widgets/snackBar/SnackBar";
import { SnackbarConfigType } from "@widgets/snackBar/snackbarType";
import { useMemo, useState } from "react";
import {
  SNACKBAR_DOCS_DESCRIPTION,
  SNACKBAR_DOCS_TITLE,
  SNACKBAR_WINDOW_CODE,
} from "./code";
import {
  SNACKBAR_DOC_PROPERTIES_OPTIONS,
  SNACKBAR_MAIN_OPTIONS,
  SNACKBAR_STORY_OPTIONS,
} from "./snackbarOptions";
import SnackbarWindow from "./SnackbarWindow";
import "./snackbar.scss";

export default function SnackbarStory() {
  const gridItem: Array<string> = [
    "show",
    "info",
    "success",
    "warning",
    "error",
    "reset",
  ];

  const getSnackbarMethod = (item: string, config: SnackbarConfigType) => {
    switch (item) {
      case "show":
        return SnackBar.show({ ...config, message: "Show Snackbar!" });
      case "info":
        return SnackBar.info({ ...config, message: "Info Snackbar!" });
      case "success":
        return SnackBar.success({ ...config, message: "Success Snackbar!" });
      case "warning":
        return SnackBar.warning({ ...config, message: "Warning Snackbar!" });
      case "error":
        return SnackBar.error({ ...config, message: "Error Snackbar!" });
      case "reset":
        return SnackBar.unmount();
    }
  };

  const [textColor, setTextColor] = useState<string>("default");
  const [backgroundColor, setBackgroundColor] = useState<string>("default");
  const [maxCount, setMaxCount] = useState<number>(100);
  const [icons, setIcons] = useState<string>("default");
  const [autoClose, setAutoClose] = useState<boolean>(true);
  const [autoCloseTime, setAutoCloseTime] = useState<string>("2s");

  const controlOptions: Array<PanelControlOption> = useMemo(() => {
    return [
      {
        panelKey: "Color",
        isShow: true,
        panelType: "color",
        onColor: textColor,
        onChange: (color) => {
          setTextColor(color as string);
        },
      },
      {
        panelKey: "Background",
        isShow: true,
        panelType: "color",
        onColor: backgroundColor,
        onChange: (color) => {
          setBackgroundColor(color as string);
        },
      },
      {
        panelKey: "MaxCount",
        isShow: true,
        panelType: "input",
        inputType: "number",
        onInput: maxCount,
        onChange: (count) => {
          setMaxCount(count as number);
        },
      },
      {
        panelKey: "Icons",
        isShow: true,
        panelType: "icon",
        onInput: icons,
        onChange: (icon) => {
          setIcons(icon as string);
        },
      },
      {
        panelKey: "AutoClose",
        isShow: true,
        panelType: "switch",
        onSwitch: autoClose,
        onChange: () => {
          setAutoClose((prev) => !prev);
        },
      },
      {
        panelKey: "AutoCloseTime",
        isShow: true,
        onInput: autoCloseTime,
        panelType: "input",
        inputType: "text",
        onChange: (time) => {
          setAutoCloseTime(time as string);
        },
      },
    ];
  }, [textColor, backgroundColor, maxCount, icons, autoClose, autoCloseTime]);

  return (
    <ControlPanelView
      docsTitle={SNACKBAR_DOCS_TITLE}
      docsDescription={SNACKBAR_DOCS_DESCRIPTION}
      docsWindowNode={<SnackbarWindow />}
      docsWindowCode={SNACKBAR_WINDOW_CODE}
      propertiesOptions={SNACKBAR_DOC_PROPERTIES_OPTIONS}
      storyOptions={SNACKBAR_STORY_OPTIONS}
      controlOptions={controlOptions}
      mainOptions={SNACKBAR_MAIN_OPTIONS}
    >
      <div className="snackbar-grid">
        {gridItem.map((item, index) => {
          const key = `snackbar-grid-${index}`;
          const config = {
            message: "",
            color: textColor,
            backgroundColor: backgroundColor,
          };
          const clickButton = () => {
            getSnackbarMethod(item, config);
          };
          return (
            <div className="grid-item" key={key}>
              <div className="grid-item-content">
                <button onClick={clickButton}>{item}</button>
              </div>
            </div>
          );
        })}
      </div>
    </ControlPanelView>
  );
}
