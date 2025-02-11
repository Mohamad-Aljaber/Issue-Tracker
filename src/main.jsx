import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/register/register";
import { Typography } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        >
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
