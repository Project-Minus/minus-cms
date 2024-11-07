import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import {
  TOOLTIP_CODE,
  TOOLTIP_DOC_OPTIONS,
} from "@pages/componentsPage/tooltip/options";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import CodeBlock from "@widgets/codeBlock/CodeBlock";
import SpeechBubbleBox from "@widgets/speechBubble/speechBubbleBox/SpeechBubbleBox";
import { useState } from "react";
import "./docsTabOptions.scss";
import MainTabOptions from "../mainTabOptions/MainTabOptions";

export default function DocsTabOptions() {
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
      <h2 className="controller-docs-title">SpeechBubble(Tooltip)</h2>
      <p
        className="controller-docs-sub-title"
        style={{ marginTop: 20, lineHeight: 1.6 }}
      >
        rendering 직후에는 보이지 않다가 특정 요소에 hover 이벤트가 발생하면
        출력되는 요소로, 부모 요소의 크기를 계산하여 반영한다. 정해진 property를
        통해 사용자가 직접 커스텀 할 수 있다.
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
            <div className="bubble-box-wrapper">
              <SpeechBubbleBox
                contents="It's tooltip!"
                bubbleContents="It's tooltip in speechBubble!"
                size={"medium"}
                checkOverflow={false}
                boxContentStyle={{
                  fontWeight: 500,
                }}
              />
            </div>
            <div className="bubble-box-wrapper">
              <SpeechBubbleBox
                contents="It's tooltip!"
                bubbleContents="It's tooltip in speechBubble!"
                size={"medium"}
                textColor="red"
                backgroundColor="blue"
                checkOverflow={false}
                boxContentStyle={{
                  fontWeight: 500,
                }}
              />
            </div>
            <div className="bubble-box-wrapper">
              <SpeechBubbleBox
                contents="It's tooltip!"
                bubbleContents="It's tooltip in speechBubble!"
                size={"medium"}
                textColor="orange"
                backgroundColor="green"
                checkOverflow={false}
                boxContentStyle={{
                  fontWeight: 500,
                }}
              />
            </div>
            <div className="bubble-box-wrapper">
              <SpeechBubbleBox
                contents="It's tooltip!"
                bubbleContents="It's tooltip in speechBubble!"
                size={"medium"}
                textColor="purple"
                backgroundColor="yellow"
                checkOverflow={false}
                boxContentStyle={{
                  fontWeight: 500,
                }}
              />
            </div>
          </div>
          <button className="show-code-btn" onClick={changeShowCode}>
            {showCodeText}
          </button>
        </div>
        {showCode && (
          <CodeBlock
            text={TOOLTIP_CODE}
            language={"jsx"}
            showLineNumbers={true}
          />
        )}
      </div>
      <div className="controller-docs-sub-title">Property</div>
      <MainTabOptions options={TOOLTIP_DOC_OPTIONS}></MainTabOptions>
      <div className="controller-docs-sub-title">Stories</div>
    </div>
  );
}
