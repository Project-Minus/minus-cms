import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

import { useGetTheme } from "@shared/hooks/useGetTheme";
import { PanelMainOption, PanelStoryOption } from "@shared/types/option";
import CodeBlock from "@widgets/codeBlock/CodeBlock";
import { ReactNode, useState } from "react";
import PropertiesOptions from "../mainTabOptions/PropertiesOptions";
import StoryOptions from "../storyOptions/StoryOptions";
import "./docsTabOptions.scss";

interface Props {
  docsTitle: string;
  docsDescription: string;
  docsWindowNode: ReactNode;
  docsWindowCode: string;
  propertiesOptions: Array<PanelMainOption>;
  storyOptions: Array<PanelStoryOption>;
}
export default function DocsTabOptions(props: Props) {
  const {
    docsTitle,
    docsDescription,
    docsWindowNode,
    docsWindowCode,
    propertiesOptions,
    storyOptions,
  } = props;
  const { themeColorStyle } = useGetTheme();
  const [bodyScale, setBodyScale] = useState<number>(1);
  const [showCode, setShowCode] = useState<boolean>(false);
  const showCodeText = showCode ? "Hide code" : "Show code";
  const changeBodyScale = (type: string) => {
    if (type === "reset") {
      setBodyScale(1);
      return;
    }
    if (type === "increase") {
      const maxScale = bodyScale >= 1.3 ? bodyScale : bodyScale + 0.2;

      setBodyScale(maxScale);
      return;
    }
    const minScale = bodyScale <= 0.7 ? bodyScale : bodyScale - 0.2;

    setBodyScale(minScale);
    return;
  };
  const changeShowCode = () => {
    setShowCode((prev) => !prev);
  };

  return (
    <div className="controller-docs" style={themeColorStyle}>
      <h2 className="controller-docs-title">{docsTitle}</h2>
      <p
        className="controller-docs-sub-title"
        style={{ marginTop: 20, lineHeight: 1.6 }}
      >
        {docsDescription}
      </p>
      <div className="controller-docs-wrapper">
        <div className="controller-docs-header">
          <ZoomInIcon
            fontSize="medium"
            onClick={() => {
              changeBodyScale("increase");
            }}
          ></ZoomInIcon>
          <ZoomOutIcon
            onClick={() => {
              changeBodyScale("decrease");
            }}
            fontSize="medium"
          ></ZoomOutIcon>
          <RestartAltIcon
            fontSize="medium"
            onClick={() => {
              changeBodyScale("reset");
            }}
          ></RestartAltIcon>
        </div>
        <div className="controller-docs-body">
          <div
            className="controller-docs-scalebox"
            style={{ transform: `scale(${bodyScale})` }}
          >
            {docsWindowNode}
          </div>
          <button className="show-code-btn" onClick={changeShowCode}>
            {showCodeText}
          </button>
        </div>
        {showCode && (
          <CodeBlock
            text={docsWindowCode}
            language={"jsx"}
            showLineNumbers={true}
          />
        )}
      </div>
      <div className="controller-docs-sub-title">
        Property( <span style={{ color: "red" }}>*</span> is required property )
      </div>
      <PropertiesOptions options={propertiesOptions} />
      <div className="controller-docs-sub-title">Stories</div>
      {storyOptions?.length > 0 &&
        storyOptions.map((story) => {
          const { storyCode, storyDesc, storyLanguage } = story;

          return (
            <StoryOptions
              text={storyCode}
              description={storyDesc}
              language={storyLanguage}
            />
          );
        })}
    </div>
  );
}
