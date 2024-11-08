export const TOOLTIP_DOCS_TITLE = "SpeechBubble(Tooltip)";
export const TOOLTIP_DOCS_DESCRIPTION = `rendering 직후에는 보이지 않다가 특정 요소에 hover 이벤트가 발생하면
출력되는 요소로, 부모 요소의 크기를 계산하여 반영한다. 정해진 property를
통해 사용자가 직접 커스텀 할 수 있다.`;
export const TOOLTIP_WINDOW_CODE = `
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
`;
export const TOOLTIP_CALC_POSITION_CODE = `if (parentWidth && parentHeight && childWidth && childHeight) {
    switch (position) {
      case "right":
        return {
          top: parentHeight / 2 - childHeight / 2 - LEFT_VERTICAL_CORRECTION,
          left: parentWidth - LEFT_HORIZONTAL_CORRECTION,
        };
      case "left":
        return {
          top: parentHeight / 2 - childHeight / 2 - LEFT_VERTICAL_CORRECTION,
          right: parentWidth - LEFT_HORIZONTAL_CORRECTION,
        };
      case "bottom":
        return {
          top: parentHeight + COMMON_VERTICAL_CORRECTION,
          left: parentWidth / 2 - childWidth / 2 - COMMON_HORIZONTAL_CORRECTION,
        };
      case "top":
        return {
          bottom: parentHeight + COMMON_VERTICAL_CORRECTION,
          left: parentWidth / 2 - childWidth / 2 - COMMON_HORIZONTAL_CORRECTION,
        };
      case "left-top":
        return {
          bottom: parentHeight + COMMON_VERTICAL_CORRECTION,
          left: parentWidth - childWidth * 0.9 - MULTI_HORIZONTAL_CORRECTION,
        };
      case "right-top":
        return {
          bottom: parentHeight + COMMON_VERTICAL_CORRECTION,
          right: parentWidth - childWidth * 0.9 - MULTI_HORIZONTAL_CORRECTION,
        };
      case "left-bottom":
        return {
          top: parentHeight - MULTI_VERTICAL_CORRECTION,
          left: parentWidth - childWidth * 0.9 - MULTI_HORIZONTAL_CORRECTION,
        };
      case "right-bottom":
        return {
          top: parentHeight - MULTI_VERTICAL_CORRECTION,
          right: parentWidth - childWidth * 0.9 - MULTI_HORIZONTAL_CORRECTION,
        };
    }
  }
};`;

export const TOOLTIP_OBSERVE_LOGIC = ` const observeBubbleBox = useCallback(() => {
    if (!bubbleBoxRef.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { clientWidth, clientHeight } = entry.target;

          if (entry.intersectionRatio > 0) {
            setDimensions({ width: clientWidth, height: clientHeight });
          }
        }
      });
    });

    observer.observe(bubbleBoxRef.current);
  }, []);`;
