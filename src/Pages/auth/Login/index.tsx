import React, { useState, useEffect } from "react";
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
import InputFieldWithIcon from "../../../components/InputFieldWithIcon";
import { Link, useNavigate } from "react-router-dom"; // ✅ استيراد useNavigate
import axios from "axios";

export default function Login() {
  const theme = useTheme();
  const PMain = theme.palette.primary.main;
  const PDark = theme.palette.primary.dark;

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ لإنشاء التنقل البرمجي

  // ✅ استخدام useEffect للتحقق من التوكن
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("User already logged in. Redirecting...");
      navigate("/dashboard"); // إعادة التوجيه إذا كان المستخدم مسجلاً بالفعل
    }
  }, [navigate]); // سيتم تنفيذ هذا الكود فقط عند تحميل الصفحة

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/",
        {
          identifier: email,
          password: password,
        }
      );

      console.log("Login Successful:", response.data);
      localStorage.setItem("jwt", response.data.jwt); // تخزين التوكن
      navigate("/dashboard"); // ✅ إعادة التوجيه بعد تسجيل الدخول بنجاح
    } catch (err: any) {
      console.error("Login Failed:", err);
      setError(err.response?.data?.error?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputs = [
    {
      type: "text",
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
      onChange: (value: string) => setPassword(value),
      icon: <VisibilityIcon />,
    },
  ];

  return (
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

            {error && (
              <Typography sx={{ color: "red", textAlign: "center" }}>
                {error}
              </Typography>
            )}

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

            <Typography
              sx={{ color: "#A9A9A9", textAlign: "end", cursor: "pointer" }}
            >
              Forget Password?
            </Typography>

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                background: `${PDark}`,
                padding: 2,
                my: 3,
                "&:hover": {
                  background: `${PMain}`,
                },
              }}
            >
              {loading ? "Loading..." : "Login"}
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
              <Link to="/signup">
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
              </Link>
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
  );
}
