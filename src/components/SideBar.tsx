import React from "react";
import {
  Avatar,
  CSSObject,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Theme,
  useTheme,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

const drawerWidth = 250;
interface SideMenuProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/dashboard" },
  {
    text: "Manga Team",
    icon: <PeopleAltOutlinedIcon />,
    path: "/dashboard/team",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/dashboard/contacts",
  },
];

const Array2 = [
  {
    text: "Profile From",
    icon: <Person2OutlinedIcon />,
    path: "/dashboard/ProfileFrom",
  },
  {
    text: "Calender",
    icon: <CalendarMonthOutlinedIcon />,
    path: "/dashboard/CalendarApp",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/dashboard/FAQ",
  },
];

const Array3 = [
  {
    text: "Bar Chart",
    icon: <StackedBarChartOutlinedIcon />,
    path: "/dashboard/BarChart",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlinedIcon />,
    path: "/dashboard/PieChart",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "/dashboard/LineChart",
  },
];

const SideBar: React.FC<SideMenuProps> = ({
  open,
  handleDrawerClose,
  
}) => {
  const theme = useTheme();
  const navigate = useNavigate(); 

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid grey",
          transition: "0.25s",
        }}
        src="https://th.bing.com/th/id/R.7b56ec5b5132995ca8de2522ff045e65?rik=MLBfaU%2bphaL7eQ&pid=ImgRaw&r=0"
      />
      <Typography
        color="inherit"
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
        Mohamad Aljaber
      </Typography>
      <Typography
        color="inherit"
        align="center"
        sx={{
          fontSize: open ? 17 : 0,
          my: 1,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>
      <Divider />

      <List>
        {Array1.map(item => (
          <ListItem
            key={item.path}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: open ? "initial" : "center",
              }}
              onClick={() => handleNavigation(item.path)} 
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {Array2.map(item => (
          <ListItem
            key={item.path}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: open ? "initial" : "center",
              }}
              onClick={() => handleNavigation(item.path)} 
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {Array3.map(item => (
          <ListItem
            key={item.path}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: open ? "initial" : "center",
              }}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
