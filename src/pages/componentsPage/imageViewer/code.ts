export const IMAGEVIEWER_DOCS_TITLE = "ImageViewer";
export const IMAGEVIEWER_DOCS_DESCRIPTION = `rendering 직후에는 보이지 않다가 특정 이미지를 클릭하면
출력되는 요소로, 이미지의 비율을 계산하여 반영한다. 
image 주소를 이용해 간단하게 사용할 수 있다.`;
export const IMAGEVIEWER_WINDOW_CODE = `ImageViewer.open({ url: testImage });

  //open 으로 사용 가능
`;

export const IMAGEVIEWER_TRANSLATE_CODE = `const handlePointerMove = (e: PointerEvent) => {
        const { clientX, clientY } = e;
        const deltaX = clientX - imageStartPoint.X;
        const deltaY = clientY - imageStartPoint.Y;

        // flip 되었을 때 마우스 움직임 변환치
        const reverseScaleX = imageScale.X > 0 ? 1 : -1;
        const reverseScaleY = imageScale.Y > 0 ? 1 : -1;

        // zoom에 따른 이동속도 보정치
        const zoomCorrection = 1 / Math.abs(imageScale.X);
        // flip 여부에 따른 보정치
        const sameBothScale = imageScale.X * imageScale.Y > 0 ? 1 : -1;
        const reverseSameBothScale = sameBothScale * -1;

        // 이동값 계산기
        const getTranslatePosition = (
          originAxis: Axis,
          translateAxis: Axis,
          zoomCorrectionNum: number,
          correction: number,
        ) => {
          // originAxis : 기본 기준 축 , translateAxis: flip, rotate에 따라 변경된 축, correction: 보정치
          if (translateAxis === "X") {
            return (
              imageTranslate[originAxis] +
              deltaX * reverseScaleX * zoomCorrectionNum * correction
            );
          }
          return (
            imageTranslate[originAxis] +
            deltaY * reverseScaleY * zoomCorrectionNum * correction
          );
        };
        let translateX = getTranslatePosition("X", "X", zoomCorrection, 1);
        let translateY = getTranslatePosition("Y", "Y", zoomCorrection, 1);

        // 좌우 회전 확인
        const reverseRotate = rotateLeftAndRight > 0 ? 1 : -1;

        // 좌우 회전 시 같은 값으로 변환
        let rotateNum = 0;
        if (reverseRotate > 0) {
          rotateNum = rotateLeftAndRight % 4;
        } else {
          rotateNum = (4 + (rotateLeftAndRight % 4)) % 4;
        }

        // 회전량에 따른 보정치 적용
        if (rotateNum === 1) {
          translateX = getTranslatePosition(
            "X",
            "Y",
            zoomCorrection,
            sameBothScale,
          );
          translateY = getTranslatePosition(
            "Y",
            "X",
            zoomCorrection,
            reverseSameBothScale,
          );
        }
        if (rotateNum === 2) {
          if (sameBothScale > 0) {
            translateX = getTranslatePosition(
              "X",
              "X",
              zoomCorrection,
              reverseSameBothScale,
            );
            translateY = getTranslatePosition(
              "Y",
              "Y",
              zoomCorrection,
              reverseSameBothScale,
            );
          } else {
            translateX = getTranslatePosition(
              "X",
              "X",
              zoomCorrection,
              sameBothScale,
            );
            translateY = getTranslatePosition(
              "Y",
              "Y",
              zoomCorrection,
              sameBothScale,
            );
          }
        }
        if (rotateNum === 3) {
          translateX = getTranslatePosition(
            "X",
            "Y",
            zoomCorrection,
            reverseSameBothScale,
          );
          translateY = getTranslatePosition(
            "Y",
            "X",
            zoomCorrection,
            sameBothScale,
          );
        }

        handleImageTranslate("X", translateX);
        handleImageTranslate("Y", translateY);

        handleImageStartPoint("X", e.clientX);
        handleImageStartPoint("Y", e.clientY);
      };;`;
