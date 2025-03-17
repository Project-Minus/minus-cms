import { useColorThemeStyle } from "@hooks/useColorThemeStyle";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import Tabs from "@shared/tabs/Tabs";
import {
  PanelControlOption,
  PanelMainOption,
  PanelStoryOption,
} from "@shared/types/option";
import { ReactNode, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { flipPosition } from "../calcFlipPosition";
import PanelSwitcher from "../panelSwitcher/PanelSwitcher";
import "./controlPanelView.scss";

interface PanelProps {
  children: ReactNode;
  docsTitle: string;
  docsDescription: string;
  docsWindowNode: ReactNode;
  docsWindowCode: string;
  propertiesOptions: Array<PanelMainOption>;
  storyOptions: Array<PanelStoryOption>;
  controlOptions?: Array<PanelControlOption>;
  mainOptions?: Array<PanelMainOption>;
  clickReset?: () => void;
}

let timeoutId: ReturnType<typeof setTimeout>;
export default function ControlPanelView(props: PanelProps) {
  const {
    children,
    docsTitle,
    docsDescription,
    docsWindowNode,
    docsWindowCode,
    propertiesOptions,
    storyOptions,
    controlOptions,
    mainOptions,
    clickReset = () => {},
  } = props;
  const { pathname } = useLocation();
  const [flipController, setFlipController] = useState<boolean>(false);
  const [tabKey, setTabKey] = useState<string>("main");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const { textColor } = useGetTheme();
  const colorScheme = useColorThemeStyle();
  const controllerHeight = tabKey === "docs" ? "100%" : "50%";
  const defaultControlOption: PanelControlOption = {
    panelKey: "Name",
    isShow: true,
    panelType: "default",
    onChange: () => {},
  };

  const controlOptionsAddDefault = [defaultControlOption, ...controlOptions];
  const flipClass = flipController ? "flip" : "non-flip";
  const tabItems = useMemo(() => {
    if (pathname.includes("mini")) {
      if (pathname.includes("imageviewer")) {
        return [
          {
            key: "main",
            label: "Main property",
          },
        ];
      }
      return [
        {
          key: "main",
          label: "Main property",
        },
        {
          key: "control",
          label: "Control",
        },
      ];
    }
    if (pathname.includes("imageviewer")) {
      return [
        {
          key: "docs",
          label: "Docs",
        },
        {
          key: "main",
          label: "Main property",
        },
      ];
    }
    return [
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
  }, [pathname]);
  const onChangeTabKey = (key: string) => {
    const currentTab = tabKey;
    const nextTab = key;

    //docs 일때 transition 적용
    if (currentTab !== "docs" && nextTab !== "docs") {
      setFlipController(false);
      setIsTransitioning(false);
      setTabKey(key);
      return;
    }
    setFlipController(false);
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
              <>
                {tabKey === "control" && (
                  <button onClick={clickReset}>reset</button>
                )}
                <OpenInBrowserIcon
                  onClick={() => {
                    setFlipController((prev) => !prev);
                  }}
                />
              </>
            }
            style={{
              borderBottom: "none",
            }}
          />
        </div>
        <div
          className="controller-content-wrapper"
          style={{ ...colorScheme.background }}
        >
          <PanelSwitcher
            docsTitle={docsTitle}
            docsDescription={docsDescription}
            docsWindowNode={docsWindowNode}
            docsWindowCode={docsWindowCode}
            propertiesOptions={propertiesOptions}
            storyOptions={storyOptions}
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
