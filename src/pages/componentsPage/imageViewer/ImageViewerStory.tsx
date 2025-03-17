import { PanelControlOption } from "@shared/types/option";
import ControlPanelView from "@widgets/controlPanel/controlPanelView/ControlPanelView";
import ImageViewer from "@widgets/imageViewer/ImageViewer";
import { useMemo } from "react";
import {
  IMAGEVIEWER_DOCS_DESCRIPTION,
  IMAGEVIEWER_DOCS_TITLE,
  IMAGEVIEWER_WINDOW_CODE,
} from "./code";
import {
  IMAGEVIEWER_DOC_PROPERTIES_OPTIONS,
  IMAGEVIEWER_MAIN_OPTIONS,
  IMAGEVIEWER_STORY_OPTIONS,
} from "./imageViewerOptions";
import SnackbarWindow from "./ImageViewerWindow";
import testImage from "../../../assets/test-image.png";
import "./imageViewer.scss";

export default function ImageViewerStory() {
  const clickReset = () => {};

  const controlOptions: Array<PanelControlOption> = useMemo(() => {
    return [];
  }, []);

  return (
    <ControlPanelView
      docsTitle={IMAGEVIEWER_DOCS_TITLE}
      docsDescription={IMAGEVIEWER_DOCS_DESCRIPTION}
      docsWindowNode={<SnackbarWindow />}
      docsWindowCode={IMAGEVIEWER_WINDOW_CODE}
      propertiesOptions={IMAGEVIEWER_DOC_PROPERTIES_OPTIONS}
      storyOptions={IMAGEVIEWER_STORY_OPTIONS}
      controlOptions={controlOptions}
      mainOptions={IMAGEVIEWER_MAIN_OPTIONS}
      clickReset={clickReset}
    >
      <div className="image-viewer-story">
        <img
          src={testImage}
          alt=""
          onClick={() => {
            ImageViewer.open({ url: testImage });
          }}
        />
      </div>
    </ControlPanelView>
  );
}
