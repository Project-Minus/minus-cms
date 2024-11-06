import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import { PanelOption } from "@shared/types/option";
import "./docsTabOptions.scss";

export function DocsTabOptions(props: PanelOption) {
  const {
    panelKey,
    isShow,
    panelType,
    description = "",
    examples = [],
    defaultExample = "",
  } = props;
  const { themeColorStyle } = useGetTheme();
  const defaultCalss = panelType === "default" ? " default-content" : "";

  if (!isShow) {
    return;
  }
  return (
    <div
      className={`controller-docs-content${defaultCalss}`}
      style={themeColorStyle}
    >
      <p className={`control-docs-name${defaultCalss}`} style={themeColorStyle}>
        {panelKey}
      </p>
      <div className={`control-docs-desc${defaultCalss}`}>
        <p>{description}</p>
        <Stack direction="row" spacing={1} style={{ width: "100%" }}>
          {examples?.map((example) => {
            return <Chip label={example} />;
          })}
        </Stack>
      </div>
      {panelType === "default" ? (
        <p className={`control-docs-default${defaultCalss}`}>
          {defaultExample}
        </p>
      ) : (
        <Chip label={defaultExample} />
      )}
    </div>
  );
}
