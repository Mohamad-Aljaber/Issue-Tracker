import { useState } from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import React from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { getDesing } from "../../../public/theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = React.useMemo(() => createTheme(getDesing(mode)), [mode]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />
        <SideBar
          open={open}
          handleDrawerClose={handleDrawerClose}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "background.default",
            minHeight: "100vh",
          }}
        >
          <DrawerHeader />

          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
