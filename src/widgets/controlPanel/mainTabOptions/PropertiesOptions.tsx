import { useGetTheme } from "@shared/hooks/useGetTheme";
import { PanelMainOption } from "@shared/types/option";
import "./mainTabOptions.scss";

interface Props {
  options: Array<PanelMainOption>;
}
export default function PropertiesOptions(props: Props) {
  const { options } = props;
  const { themeColorStyle } = useGetTheme();

  return (
    <>
      {options.map((option, index) => {
        const {
          panelKey,
          isShow,
          required = false,
          description = "",
          defaultExample = "",
        } = option;
        const key = `${panelKey}-${index}`;
        const requiredClass = required ? " required" : "";
        const headerStyle = index === 0 ? { border: "none" } : {};

        if (!isShow) {
          return;
        }
        return (
          <div
            key={key}
            className={`controller-main-content properties-content`}
            style={{ ...themeColorStyle, ...headerStyle }}
          >
            <p
              className={`control-main-name properties-name${requiredClass}`}
              style={themeColorStyle}
            >
              {panelKey}
            </p>
            <div className={`control-main-desc properties-desc`}>
              <p>{description}</p>
            </div>
            <p className={`control-main-default properties-default`}>
              {defaultExample}
            </p>
          </div>
        );
      })}
    </>
  );
}
