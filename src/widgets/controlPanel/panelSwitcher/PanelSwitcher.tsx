import { PanelControlOption, PanelMainOption } from "@shared/types/option";
import { ReactNode, useEffect, useRef } from "react";
import ControlTabOption from "../controlTabOptions/ControlTabOptions";

import DocsTabOptions from "../docsTabOptions/DocsTabOptions";
import MainTabOptions from "../mainTabOptions/MainTabOptions";

interface SwitchProps {
  panels: { [key: string]: ReactNode };
  tabKey: string;
  isTransitioning: boolean;
}
const Switch = (props: SwitchProps) => {
  const { panels, tabKey, isTransitioning } = props;
  const tabKeyRef = useRef<string>(null);
  const getTabKeyWithTransition = () => {
    //trainsition 하고 있을 때는 기존 탭을 보여줌
    if (isTransitioning) {
      return tabKeyRef.current;
    }
    return tabKey;
  };

  useEffect(() => {
    tabKeyRef.current = tabKey;
  }, [tabKey]);
  return panels[getTabKeyWithTransition()] || null;
};

interface PanelSwitchProps {
  mainOptions: Array<PanelMainOption>;
  controlOptions: Array<PanelControlOption>;
  tabKey: string;
  isTransitioning: boolean;
}
export default function PanelSwitcher(props: PanelSwitchProps) {
  const { mainOptions, controlOptions, tabKey, isTransitioning } = props;

  return (
    <Switch
      panels={{
        docs: <DocsTabOptions />,
        main: <MainTabOptions options={mainOptions} />,
        control: <ControlTabOption options={controlOptions} />,
      }}
      tabKey={tabKey}
      isTransitioning={isTransitioning}
    />
  );
}
