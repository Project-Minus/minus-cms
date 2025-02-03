import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { EditorProps } from "@toast-ui/react-editor";
import { Editor as ToastUiEditor } from "@toast-ui/react-editor";
import componentPlugin from "@widgets/componentPlugin/ComponentPlugin";
import { useEffect, useRef } from "react";
import "./editor.scss";

interface Props extends EditorProps {
  changeContents: (contents: string) => void;
}

export default function Editor(props: Props) {
  const editorRef = useRef<ToastUiEditor>(null);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }
  }, []);

  useEffect(() => {
    // addCommand는 3번째 인자의 콜백함수로 반드시 저 4개의 인자를 받으며 성공 여부를 리턴하는 함수를 담아야 한다.
    editorRef.current?.getInstance().addCommand("markdown", "addIframe", () => {
      let url = prompt("추가할 iframe 주소를 입력해주세요");

      // url을 담지 않거나, 취소했을경우 취소.
      if (!url) {
        return false;
      }
      url = url?.split("=").at(-1) ?? "";
      const str = `<iframe src="${url}" title="component"></iframe>`;
      editorRef.current?.getInstance().insertText(str);
      return true;
    });

    editorRef.current?.getInstance().insertToolbarItem(
      { groupIndex: 3, itemIndex: 3 },
      {
        name: "iframe",
        tooltip: "iframe",
        className: "toastui-editor-toolbar-icons iframes",
        style: {
          // backgroundImage: `url(${linkLogo})`,
          backgroundSize: "25px",
        },
        command: "addIframe", // 트리거를 담으면 툴바아이템의 클릭이벤트에 맞춰진다.
      },
    );

    editorRef.current?.getInstance().removeHook("addImageBlobHook");
    //addHook...
  }, []);

  return (
    <ToastUiEditor
      {...props}
      ref={editorRef}
      plugins={[componentPlugin]}
      onChange={() => {
        if (editorRef.current) {
          const instance = editorRef.current.getInstance();
          // const markdown = instance.getMarkdown();

          const html = instance.getHTML();
          props.changeContents(html);
        }
      }}
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
              { type: "html", content: node.childrenHTML ?? "" },
              { type: "closeTag", tagName: "iframe", outerNewLine: true },
            ];
          },
        },
      }}
    />
  );
}
