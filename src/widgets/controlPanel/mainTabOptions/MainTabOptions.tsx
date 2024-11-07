import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useGetTheme } from "@shared/hooks/useGetTheme";
import { PanelMainOption } from "@shared/types/option";
import "./mainTabOptions.scss";

interface Props {
  options: Array<PanelMainOption>;
}
export default function MainTabOptions(props: Props) {
  const { options } = props;
  const { themeColorStyle } = useGetTheme();

  return (
    <>
      {options.map((option, index) => {
        const {
          panelKey,
          isShow,
          panelType,
          description = "",
          examples = [],
          defaultExample = "",
        } = option;
        const defaultCalss = panelType === "default" ? " default-content" : "";
        const key = `${panelKey}-${index}`;

        if (!isShow) {
          return;
        }
        return (
          <div
            key={key}
            className={`controller-main-content${defaultCalss}`}
            style={themeColorStyle}
          >
            <p
              className={`control-main-name${defaultCalss}`}
              style={themeColorStyle}
            >
              {panelKey}
            </p>
            <div className={`control-main-desc${defaultCalss}`}>
              <p>{description}</p>
              <Stack
                direction="row"
                spacing={1}
                sx={{ width: "100%", flexWrap: "wrap" }}
                useFlexGap
              >
                {examples?.map((example, index) => {
                  const chipKey = `${example}-${index}`;

                  return <Chip key={chipKey} label={example} />;
                })}
              </Stack>
            </div>
            {panelType === "default" ? (
              <p className={`control-main-default${defaultCalss}`}>
                {defaultExample}
              </p>
            ) : (
              <Chip label={defaultExample} />
            )}
          </div>
        );
      })}
    </>
  );
}
