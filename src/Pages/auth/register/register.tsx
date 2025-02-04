import React, { useState } from "react";
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
} from "@mui/material";
import InputFieldWithIcon from "../../components/InputFieldWithIcon";
export default function Register() {
  const theme = useTheme();
  const PMain = theme.palette.primary.main;
  const PDark = theme.palette.primary.dark;
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyDescription: "",
    companyLogo: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const inputs = [
    {
      type: "",
      label: "Name of company",
      value: formData.companyName,
      onChange: (value: string) => handleInputChange("companyName", value),
      placeholder: "Enter your company name",
      icon: <HomeWorkIcon />,
    },
    {
      label: "Address of company",
      value: formData.companyAddress,
      onChange: (value: string) => handleInputChange("companyAddress", value),
      placeholder: "Enter your company address",
      icon: <MonetizationOnIcon />,
    },
    {
      label: "Description",
      value: formData.companyDescription,
      onChange: (value: string) =>
        handleInputChange("companyDescription", value),
      placeholder: "Enter a description for your company",
      icon: <DescriptionIcon />,
    },
    {
      label: "Logo of company",
      value: formData.companyLogo,
      onChange: (value: string) => handleInputChange("companyLogo", value),
      placeholder: "Enter the URL of your company logo",
      icon: (
        <img
          src="/imagesSVG/logo.svg"
          alt="SVG "
          style={{ width: "100%" }}
        />
      ),
    },
  ];

  return (
    <>
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

              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: `${PDark}`,
                  padding: 2,
                  my: 6,
                  "&:hover": {
                    background: `${PMain}`,
                  },
                }}
              >
                Go to payment
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
