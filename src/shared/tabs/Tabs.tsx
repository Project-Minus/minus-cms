import { TabItem } from "@shared/types/tab";
import { CSSProperties, Fragment, ReactNode } from "react";
import "./tabs.scss";

interface Props {
  items: Array<TabItem>;
  onChange: (key) => void;
  activeKey: string;
  defaultKey?: string;
  underbarDistanse?: string;
  underbarColor?: string;
  extraContent?: ReactNode;
  style?: CSSProperties;
  activeTextColor?: string;
  defaultTextColor?: string;
}
const DEFAULT_ACTIVE_COLOR = "rgba(243, 115, 33, 1)";
const DEFAULT_TEXT_COLOR = "rgba(17, 17, 17, 1)";

export default function Tabs(props: Props) {
  const {
    items,
    onChange,
    activeKey,
    extraContent,
    underbarDistanse = "16px",
    underbarColor = DEFAULT_ACTIVE_COLOR,
    activeTextColor = DEFAULT_ACTIVE_COLOR,
    defaultTextColor = DEFAULT_TEXT_COLOR,
    ...rest
  } = props;

  return (
    <div className="common-tabs" {...rest}>
      <div className="common-tabs__items">
        {items.map((tabItem, index) => {
          const activeClass =
            tabItem.key === activeKey ? " common-tabs__item--active" : "";
          const isActive = tabItem.key === activeKey;
          const actviceColor = isActive ? activeTextColor : defaultTextColor;
          const handleChangeKey = () => {
            onChange(tabItem.key);
          };
          const key = `${tabItem.key}_${index}`;

          return (
            <Fragment key={key}>
              <div
                onClick={handleChangeKey}
                className={`common-tabs__item${activeClass}`}
                key={`${tabItem.key}_${index}`}
              >
                <span
                  style={{
                    color: actviceColor,
                  }}
                >
                  {tabItem.label}
                </span>
                {isActive && (
                  <div
                    className="common-tabs__under-bar"
                    style={{
                      top: underbarDistanse,
                      backgroundColor: underbarColor,
                    }}
                  />
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
      {extraContent}
    </div>
  );
}
