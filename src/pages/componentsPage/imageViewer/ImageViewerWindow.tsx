import ImageViewer from "@widgets/imageViewer/ImageViewer";
import testImage from "../../../assets/test-image.png";

export default function TooltipWindow() {
  return (
    <div className="image-viewer-window">
      <img
        src={testImage}
        alt=""
        onClick={() => {
          ImageViewer.open({ url: testImage });
        }}
      />
    </div>
  );
}
