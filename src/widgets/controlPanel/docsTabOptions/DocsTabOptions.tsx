import { useGetTheme } from "@shared/hooks/useGetTheme";
import "./docsTabOptions.scss";

export default function DocsTabOptions() {
  const { themeColorStyle } = useGetTheme();

  return <div style={themeColorStyle}>It's docs!</div>;
}
