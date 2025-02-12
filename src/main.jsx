import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/register/register";
import { Typography } from "@mui/material";
import Dashboard from "./Pages/dashboard/index.tsx";
import Team from "./components/team/Team.tsx";
import Contacts from "./components/contact/Contact.tsx";
import ProfileFrom from "./components/profileFrom/ProfileFrom.tsx";
import CalendarApp from "./components/calender/Calender.tsx";
import FAQ from "./components/faqPage/FAQ.tsx";
import BarChart from "./components/barChart/BarChart.tsx";
import PieChart from "./components/pieChart/PieChart.tsx";
import LineChart from "./components/lineChart/LineChart.tsx";
import Home from "./components/home/Home.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route
            index
            element={<Login />}
          />
          <Route
            path="/Login"
            index
            element={<Login />}
          />
          <Route
            path="/signup"
            index
            element={<Register />}
          />
          <Route
            path="dashboard"
            element={<Dashboard />}
          >
            <Route index element={<Home />} />              
            <Route
              path="team"
              element={<Team />}
            />
            <Route
              path="contacts"
              element={<Contacts />}
            />
            <Route
              path="ProfileFrom"
              element={<ProfileFrom />}
            />
            <Route
              path="CalendarApp"
              element={<CalendarApp />}
            />
            <Route
              path="FAQ"
              element={<FAQ />}
            />
            <Route
              path="BarChart"
              element={<BarChart />}
            />
            <Route
              path="PieChart"
              element={<PieChart />}
            />
            <Route
              path="LineChart"
              element={<LineChart />}
            />
          </Route>
          <Route
            path="*"
            element={
              <Typography
                variant="h1"
                color="initial"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "red",
                }}
              >
                404 - الصفحة غير موجودة
              </Typography>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
