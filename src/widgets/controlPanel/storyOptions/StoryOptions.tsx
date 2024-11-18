import CodeBlock from "@widgets/codeBlock/CodeBlock";
import "./storyOptions.scss";

interface Props {
  text: string;
  description?: string;
  language?: string;
  showLineNumbers?: boolean;
}
export default function StoryOptions(props: Props) {
  const { text, description = "", language, showLineNumbers } = props;

  return (
    <div className="story-options">
      <p>{description}</p>
      <CodeBlock
        text={text}
        language={language}
        showLineNumbers={showLineNumbers}
      />
    </div>
  );
}
