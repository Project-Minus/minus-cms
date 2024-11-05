export const calcBubblePosition = (
  position:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "left-top"
    | "right-top"
    | "left-bottom"
    | "right-bottom",
  parentWidth: number,
  parentHeight: number,
  childWidth: number,
  childHeight: number,
) => {
  //위치 보정치
  const LEFT_VERTICAL_CORRECTION = 12;
  const LEFT_HORIZONTAL_CORRECTION = 4;
  const MULTI_VERTICAL_CORRECTION = 8;
  const MULTI_HORIZONTAL_CORRECTION = 8;
  const COMMON_VERTICAL_CORRECTION = -4;
  const COMMON_HORIZONTAL_CORRECTION = 10;

  if (parentWidth && parentHeight && childWidth && childHeight) {
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
};
