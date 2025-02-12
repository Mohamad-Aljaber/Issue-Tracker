import React, { useState, useEffect } from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DescriptionIcon from "@mui/icons-material/Description";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  Alert,
} from "@mui/material";
import InputFieldWithIcon from "../../../components/InputFieldWithIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

export default function Register() {
  const theme = useTheme();
  const PMain = theme.palette.primary.main;
  const PDark = theme.palette.primary.dark;
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ التحقق مما إذا كان المستخدم مسجلاً بالفعل
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("User already registered. Redirecting...");
      navigate("/dashboard"); // إعادة التوجيه إذا كان مسجلاً بالفعل
    }
  }, [navigate]);

  // ✅ إعادة التوجيه بعد نجاح التسجيل
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/payment"); // إعادة التوجيه إلى صفحة الدفع
      }, 2000); // بعد 2 ثانية

      return () => clearTimeout(timer); // تنظيف الـ timer
    }
  }, [success, navigate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username: formData.Name,
          email: formData.Email,
          password: formData.Password,
        }
      );

      console.log("Registration Successful:", response.data);
      localStorage.setItem("jwt", response.data.jwt); // ✅ تخزين التوكن
      setSuccess("Registration successful! Redirecting to payment...");
    } catch (err: any) {
      console.error("Registration Failed:", err);
      setError(err.response?.data?.error?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputs = [
    {
      type: "text",
      label: "Name",
      value: formData.Name,
      onChange: (value: string) => handleInputChange("Name", value),
      placeholder: "Enter your Name",
      icon: <HomeWorkIcon />,
    },
    {
      type: "email",
      label: "Email",
      value: formData.Email,
      onChange: (value: string) => handleInputChange("Email", value),
      placeholder: "Enter your email",
      icon: <MonetizationOnIcon />,
    },
    {
      type: "password",
      label: "Password",
      value: formData.Password,
      onChange: (value: string) => handleInputChange("Password", value),
      placeholder: "Enter Password",
      icon: <DescriptionIcon />,
    },
  ];

  return (
    <Grid container>
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
          src="/src/assets/images/signup-banner3.svg"
          alt="SVG Example"
          style={{ width: "100%" }}
        />
      </Grid>

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
              sx={{ fontWeight: 700, textAlign: "start" }}
            >
              Information about company
            </Typography>

            {/* ✅ عرض رسالة نجاح أو خطأ */}
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}

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

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                background: `${PDark}`,
                padding: 2,
                my: 6,
                "&:hover": {
                  background: `${PMain}`,
                },
              }}
            >
              {loading ? "Registering..." : "Go to Payment"}
            </Button>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
