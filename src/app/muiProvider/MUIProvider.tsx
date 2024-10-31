import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme } from "@mui/material";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
  window?: () => Window;
}

export default function MUIProvider(props: ProviderProps) {
  const { children, window } = props;
  const windows = window !== undefined ? window() : undefined;
  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Main items",
    },
    {
      segment: "blog",
      title: "Blog",
      icon: <ShoppingCartIcon />,
      children: [
        {
          segment: "write_article",
          title: "Writing Post",
          icon: <DescriptionIcon />,
        },
        {
          segment: "list_article",
          title: "Posting list",
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Analytics",
    },
    {
      segment: "settings",
      title: "Settings",
      icon: <BarChartIcon />,
      children: [
        {
          segment: "categories",
          title: "Post categories",
          icon: <DescriptionIcon />,
        },
        {
          segment: "traffic",
          title: "Traffic",
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: "integrations",
      title: "Integrations",
      icon: <LayersIcon />,
    },
  ];

  const Theme = createTheme({
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={Theme}
      window={windows}
      branding={{
        logo: <></>,
        title: "Minus",
      }}
    >
      {children}
    </AppProvider>
  );
}
