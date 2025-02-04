import React, { ReactNode } from "react";
import {
  Box,
  FormHelperText,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { log } from "console";
interface InputFieldWithIconProps {
  label?: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
  iconPosition?: "start" | "end";
  value?: string;
  onChange: (value: string) => void;
}

const InputFieldWithIcon: React.FC<InputFieldWithIconProps> = ({
  value,
  onChange,
  label = "",
  type = "text",
  placeholder = "",
  children,
  iconPosition = "end",
}) => {
  return (
    <Box sx={{ height: "100%" }}>
      {/* للتحقق من ادخال قيمة label  */}
      {label !== "" ? (
        <FormHelperText sx={{ color: "black", fontSize: "1rem" }}>
          {label}
        </FormHelperText>
      ) : (
        ""
      )}

      <FormControl
        fullWidth
        sx={{
          border: "1px solid #BABABA",
          borderRadius: "8px",
          height: "100%",
          "& .Mui-focused": {
            height: "100%",
          },
        }}
        variant="outlined"
      >
        <OutlinedInput
          id={`outlined-adornment-${label}`}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          required
          placeholder={placeholder}
          startAdornment={
            iconPosition === "start" ? (
              <InputAdornment
                position="start"
                sx={{
                  color: "#BABABA",
                }}
              >
                {children}
              </InputAdornment>
            ) : null
          }
          endAdornment={
            iconPosition === "end" ? (
              <InputAdornment
                position="end"
                sx={{ color: "#BABABA" }}
              >
                {children}
              </InputAdornment>
            ) : null
          }
          aria-describedby={`outlined-${label}-helper-text`}
          inputProps={{
            "aria-label": label,
          }}
          sx={{
            height: "100%",
            "& .MuiInputBase-input::placeholder": {
              color: "gray",
            },
            "& .MuiInputBase-input": {
              color: "black",
            },

            // أخفاء الأسهم الأفتراضية

            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
              {
                display: "none",
              },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default InputFieldWithIcon;
