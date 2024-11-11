import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { EditorProps } from "@toast-ui/react-editor";
import { Editor as ToastUiEditor } from "@toast-ui/react-editor";
import componentPlugin from "@widgets/componentPlugin/ComponentPlugin";
import { useEffect, useRef } from "react";

interface Props extends EditorProps {}

export default function Editor(props: Props) {
  const editorRef = useRef<ToastUiEditor>(null);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }
  }, []);
  return (
    <ToastUiEditor
      {...props}
      ref={editorRef}
      initialValue="MR.MICRONOX"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      plugins={[componentPlugin]}
      customHTMLRenderer={{
        htmlBlock: {
          iframe(node) {
            return [
              {
                type: "openTag",
                tagName: "iframe",
                outerNewLine: true,
                attributes: node.attrs,
              },
              { type: "html", content: node.childrenHTML },
              { type: "closeTag", tagName: "iframe", outerNewLine: true },
            ];
          },
        },
      }}
    />
  );
}
