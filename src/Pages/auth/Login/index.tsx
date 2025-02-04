import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import InputFieldWithIcon from "../../components/InputFieldWithIcon";

export default function Login() {
  const theme = useTheme();
  const PMain = theme.palette.primary.main;
  const PDark = theme.palette.primary.dark;
  const [password, setPassord] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", { password, email });
  };

  const inputs = [
    {
      type: "email",
      label: "Email",
      placeholder: "Email@gmail.com",
      value: email,
      onChange: (value: string) => setEmail(value),
      icon: <EmailIcon />,
    },
    {
      type: "password",
      label: "Password",
      placeholder: "8+ characters",
      value: password,
      onChange: (value: string) => setPassord(value),
      icon: <VisibilityIcon />,
    },
  ];

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Container>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", gap: "20px", flexDirection: "column" }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: 700 }}
              >
                Login Page
              </Typography>

              {/* توليد الحقول باستخدام map */}
              {inputs.map((input, index) => (
                <InputFieldWithIcon
                  key={index}
                  label={input.label}
                  value={input.value}
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                  type={input.type}
                >
                  {input.icon}
                </InputFieldWithIcon>
              ))}

              <Typography sx={{ color: "#A9A9A9", textAlign: "end",cursor:"pointer" }}>
                Forget Password?
              </Typography>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: `${PDark}`,
                  padding: 2,
                  my: 3,
                  "&:hover": {
                    background: `${PMain}`,
                  },
                }}
              >
                Login
              </Button>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#A9A9A9" }}>
                  Don't have account?
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "white",
                    color: "#A9A9A9",
                    borderRadius: "40%",
                    fontSize: "10px",
                    p: 1,
                    border: "none",
                    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.6)",
                    },
                  }}
                >
                  Create Account
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>

        <Grid
          item
          xs={0}
          md={5}
          sx={{
            background: `${PMain}D6`,
            overflow: "hidden",
            textAlign: "center",
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
            px: "1rem",
          }}
        >
          <img
            src="/src/assets/images/login.png"
            alt="SVG Example"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
