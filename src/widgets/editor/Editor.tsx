import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { EditorProps } from "@toast-ui/react-editor";
import { Editor as ToastUiEditor } from "@toast-ui/react-editor";

interface Props extends EditorProps {}

export default function Editor(props: Props) {
  return (
    <ToastUiEditor
      {...props}
      initialValue="MR.MICRONOX"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
}
