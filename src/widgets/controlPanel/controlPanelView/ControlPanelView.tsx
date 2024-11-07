import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import Tabs from "@shared/tabs/Tabs";
import { PanelControlOption, PanelMainOption } from "@shared/types/option";
import { ReactNode, useState } from "react";
import { flipPosition } from "../calcFlipPosition";
import "./controlPanelView.scss";
import PanelSwitcher from "../panelSwitcher/PanelSwitcher";

interface PanelProps {
  children: ReactNode;
  controlOptions?: Array<PanelControlOption>;
  mainOptions?: Array<PanelMainOption>;
}

let timeoutId: ReturnType<typeof setTimeout>;
export default function ControlPanelView(props: PanelProps) {
  const { children, controlOptions, mainOptions } = props;
  const [flipController, setFlipController] = useState<boolean>(true);
  const [tabKey, setTabKey] = useState<string>("main");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const { textColor } = useGetTheme();
  const controllerHeight = tabKey === "docs" ? "100%" : "50%";
  const defaultControlOption: PanelControlOption = {
    panelKey: "Name",
    isShow: true,
    panelType: "default",
    onChange: () => {},
  };

  const controlOptionsAddDefault = [defaultControlOption, ...controlOptions];
  const flipClass = flipController ? "flip" : "non-flip";
  const tabItems = [
    {
      key: "docs",
      label: "Docs",
    },
    {
      key: "main",
      label: "Main property",
    },
    {
      key: "control",
      label: "Control",
    },
  ];
  const onChangeTabKey = (key: string) => {
    const currentTab = tabKey;
    const nextTab = key;

    //docs 일때 transition 적용
    if (currentTab !== "docs" && nextTab !== "docs") {
      setIsTransitioning(false);
      setTabKey(key);
      return;
    }
    setIsTransitioning(true);
    setTabKey(key);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="control-panel">
      <div className="panel-view">{children}</div>
      <div
        className={`controller ${flipClass}`}
        style={{
          height: controllerHeight,
          bottom: flipPosition(flipController, tabKey),
        }}
      >
        <div className="controller-header">
          <Tabs
            activeKey={tabKey}
            items={tabItems}
            underbarDistanse="7px"
            underbarColor={textColor}
            activeTextColor={textColor}
            defaultTextColor={textColor}
            onChange={onChangeTabKey}
            extraContent={
              <OpenInBrowserIcon
                onClick={() => {
                  setFlipController((prev) => !prev);
                }}
              />
            }
            style={{
              borderBottom: "none",
            }}
          />
        </div>
        <div className="controller-content-wrapper">
          <PanelSwitcher
            mainOptions={mainOptions}
            controlOptions={controlOptionsAddDefault}
            tabKey={tabKey}
            isTransitioning={isTransitioning}
          />
        </div>
      </div>
    </div>
  );
}
