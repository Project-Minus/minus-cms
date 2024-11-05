import {
  CSSProperties,
  useLayoutEffect,
  useState,
  useRef,
  ReactNode,
  MouseEvent,
} from "react";

import "./style.scss";
import { calcBubblePosition } from "../calcBubblePosition";
import { TooltipPosition } from "../type";

interface Props {
  contents: ReactNode;
  parentDimension: { width: number; height: number };
  position?: TooltipPosition;
  size?: "small" | "medium" | "large" | "extraLarge";
  isTail?: boolean;
}
export default function SpeechBubble(props: Props) {
  const {
    contents,
    parentDimension,
    position = "top",
    size,
    isTail = true,
  } = props;
  const [positionStyle, setPositionStyle] = useState<CSSProperties>({});
  const bubbleRef = useRef<HTMLDivElement>(null);
  const positionClass = isTail ? ` speech-bubble--${position}` : "";
  const sizeClass = size ? ` speech-bubble--${size}` : "";
  const childWidth = bubbleRef?.current?.clientWidth;
  const childHeight = bubbleRef?.current?.clientHeight;

  const preventEvent = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useLayoutEffect(() => {
    const parentWidth = parentDimension.width;
    const parentHeight = parentDimension.height;

    setPositionStyle(
      calcBubblePosition(
        position,
        parentWidth,
        parentHeight,
        childWidth,
        childHeight,
      ),
    );
  }, [position, parentDimension, childWidth, childHeight]);

  return (
    <div
      onClick={preventEvent}
      ref={bubbleRef}
      style={positionStyle}
      className={`speech-bubble${positionClass}${sizeClass}`}
    >
      {contents}
    </div>
  );
}
