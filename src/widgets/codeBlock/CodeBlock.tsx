import { CopyBlock, nord } from "react-code-blocks";
import "./codeBlock.scss";

interface Props {
  text: string;
  language?: string;
  showLineNumbers?: boolean;
}
export default function CodeBlock(props: Props) {
  const { text, language = "jsx", showLineNumbers = true } = props;

  return (
    <div className="code-view">
      <CopyBlock
        text={text}
        language={language}
        theme={nord}
        showLineNumbers={showLineNumbers}
      />
    </div>
  );
}
