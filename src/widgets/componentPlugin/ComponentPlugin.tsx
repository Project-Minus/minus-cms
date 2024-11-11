import { componentRouter } from "@app/routers/MainRouters";
import { PluginInfo } from "@toast-ui/editor/dist/toastui-editor-viewer";
import type { MdNode } from "@toast-ui/editor";

export default function componentPlugin(): PluginInfo {
  let prevNodeLiteral: string | null = null;
  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return {
    markdownParsers: {
      code: (node: MdNode) => {
        const matched = node.literal?.match(/<([a-z][a-z0-9]*)\/>/);

        if (matched) {
          const componentName = matched[1];
          const lowerComponentName = componentName;
          const targetComponent = componentRouter.children.find(
            (child) => child.path === lowerComponentName,
          );

          if (targetComponent) {
            node.literal = `__component__${componentName}__`;
          }
        }
      },
    },
    toHTMLRenderers: {
      code: (node: MdNode) => {
        // 이전 노드와 현재 노드 비교
        if (
          prevNodeLiteral?.startsWith("__component__") &&
          !node.literal.startsWith("__component__")
        ) {
          // 컴포넌트가 지워졌을 때
          const previews = document.querySelectorAll(".component-preview");

          previews.forEach((preview) => preview.remove());
        }
        prevNodeLiteral = node.literal;
        if (node.literal.startsWith("__component__")) {
          console.log(22);
          const componentName = node.literal.split("__")[2];
          const lowerComponentName = componentName.toLowerCase();
          const targetComponent = componentRouter.children.find(
            (child) => child.path === lowerComponentName,
          );

          if (targetComponent) {
            return {
              type: "html",
              // TODO : url 변경, 크기 변경
              content: `<div class="component-preview" id="${lowerComponentName}-preview"><iframe src="http://localhost:5173/frame/${lowerComponentName}" width="100%" height="200px"></iframe></div>`,
            };
          }
        }
        return {
          type: "html",
          content: `<code>${escapeHtml(node.literal)}</code>`,
        };
      },
    },
  };
}
