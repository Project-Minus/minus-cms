import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import SpeechBubbleBox from "@widgets/speechBubble/SpeechBubbleBox/SpeechBubbleBox";
import { useState } from "react";
import "./docsTabOptions.scss";

export default function DocsTabOptions() {
  const { themeColorStyle } = useGetTheme();
  const [bodyScale, setBodyScale] = useState<number>(1);
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

  return (
    <div style={themeColorStyle}>
      <h2>title</h2>
      <p>description</p>
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
          <RestartAltIcon fontSize="medium"></RestartAltIcon>
        </div>
        <div
          className="controller-docs-body"
          style={{ transform: `scale(${bodyScale})` }}
        >
          <div className="controller-docs-scalebox">
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
        </div>
      </div>
    </div>
  );
}
