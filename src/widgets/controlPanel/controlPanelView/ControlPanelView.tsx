import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import Tabs from "@shared/tabs/Tabs";
import { PanelOption } from "@shared/types/option";
import { ReactNode, useState } from "react";
import { flipPosition } from "../calcFlipPosition";
import ControlTabOption from "../controlTabOptions/ControlTabOptions";
import { DocsTabOptions } from "../docsTabOptions/DocsTabOptions";
import "./controlPanelView.scss";

interface PanelProps {
  children: ReactNode;
  controlOptions?: Array<PanelOption>;
  docsOptions?: Array<PanelOption>;
}

export default function ControlPanelView(props: PanelProps) {
  const { children, controlOptions, docsOptions } = props;
  const [flipController, setFlipController] = useState<boolean>(true);
  const [tabKey, setTabKey] = useState<string>("docs");
  const { textColor } = useGetTheme();
  const defaultControlOption: PanelOption = {
    panelKey: "Name",
    isShow: true,
    panelType: "default",
    onChange: () => {},
  };
  const defaultDocsOption: PanelOption = {
    panelKey: "Name",
    isShow: true,
    panelType: "default",
    description: "Description",
    examples: [],
    defaultExample: "Default",
  };
  const controlOptionsAddDefault = [defaultControlOption, ...controlOptions];
  const docsOptionsAddDefault = [defaultDocsOption, ...docsOptions];
  const flipClass = flipController ? "flip" : "non-flip";
  const tabItems = [
    {
      key: "docs",
      label: "Docs",
    },
    {
      key: "control",
      label: "Control",
    },
  ];

  return (
    <div className="control-panel">
      <div className="panel-view">{children}</div>
      <div
        className={`controller ${flipClass}`}
        style={{
          bottom: flipPosition(flipController, controlOptionsAddDefault),
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
            onChange={setTabKey}
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
          {tabKey === "docs" &&
            docsOptionsAddDefault.map(
              ({
                panelKey,
                isShow,
                panelType,
                description,
                examples,
                defaultExample,
              }) => {
                return (
                  <DocsTabOptions
                    panelKey={panelKey}
                    isShow={isShow}
                    panelType={panelType}
                    description={description}
                    examples={examples}
                    defaultExample={defaultExample}
                  />
                );
              },
            )}
          {tabKey === "control" &&
            controlOptionsAddDefault.map(
              ({
                panelKey,
                isShow,
                panelType,
                onColor,
                onSwitch,
                onSelect,
                onChange,
              }) => {
                return (
                  <ControlTabOption
                    panelKey={panelKey}
                    isShow={isShow}
                    panelType={panelType}
                    onColor={onColor}
                    onSwitch={onSwitch}
                    onSelect={onSelect}
                    onChange={onChange}
                  />
                );
              },
            )}
        </div>
      </div>
    </div>
  );
}
