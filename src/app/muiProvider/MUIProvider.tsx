import { componentRouterInPage } from "@app/routers/MainRouters";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme } from "@mui/material";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { ReactNode, useEffect } from "react";
import logo from "../../assets/minus.png";

interface ProviderProps {
  children: ReactNode;
  cutomWindow?: () => Window;
}

export default function MUIProvider(props: ProviderProps) {
  const { children, cutomWindow } = props;
  const windows = cutomWindow !== undefined ? cutomWindow() : undefined;
  const componentNavigation = () => {
    const childrens = componentRouterInPage.children.map((child) => {
      return {
        segment: child.path,
        title: child.path.charAt(0).toUpperCase() + child.path.slice(1),
        icon: <DescriptionIcon />,
      };
    });

    return {
      segment: "component",
      title: "Component",
      icon: <BarChartIcon />,
      children: [...childrens],
    };
  };
  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Main items",
    },
    {
      segment: "blog",
      title: "Blog",
      // 변경 예정
      icon: <ShoppingCartIcon />,
      children: [
        {
          segment: "write-article",
          title: "Writing Post",
          icon: <DescriptionIcon />,
        },
        {
          segment: "list-article",
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
    componentNavigation(),
    {
      segment: "tables",
      title: "Data",
      icon: <BarChartIcon />,
      children: [
        {
          segment: "",
          title: "Tables",
          icon: <DescriptionIcon />,
        },
      ],
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
          segment: "traffics",
          title: "Traffics",
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

  useEffect(() => {
    const linkElement = document.querySelector(
      ".MuiToolbar-root .MuiBox-root a",
    );

    if (linkElement) {
      linkElement.addEventListener("click", (event) => {
        event.preventDefault();
      });
    }
  }, []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={Theme}
      window={windows}
      branding={{
        logo: (
          <img
            onClick={() => {
              if (window.location.pathname.includes("frame")) {
                return;
              }
              window.location.href = "/";
            }}
            src={logo}
            style={{ width: "104px", padding: 8, height: 32, margin: 4 }}
          />
        ),
        title: "",
      }}
    >
      {children}
    </AppProvider>
  );
}
