import React from "react";
import { OutlinedInput, Stack, Typography, useMediaQuery } from "@mui/material";

const InputField = ({
  placeholder,
  label,
  helperText,
  onChange,
  value,
  fullWidth = false,
  disabled = false,
  autoFocus = false,
  sx = {},
  type = "text",
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Stack spacing={1}>
      {label && (
        <Typography
          color="#282828"
          variant="body1"
          sx={{ fontSize: isMobile ? "12px" : "16px" }}
        >
          {label}
        </Typography>
      )}
      <OutlinedInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        fullWidth={fullWidth}
        disabled={disabled}
        autoFocus={autoFocus}
        type={type}
        sx={{
          ...sx,
          backgroundColor: "#fff",
          borderRadius: isMobile ? "6.05px" : "10px",
          borderColor: "#B1B7D6",
          height: isMobile ? "33.86px" : "56px",
          fontFamily: "DM Sans, sans-serif",
          "& .MuiOutlinedInput-input": {
            padding: isMobile ? "8px 14px" : "14px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
        }}
      />
      {helperText && (
        <Typography
          color="#FF4E4E"
          variant="body1"
          sx={{ fontSize: isMobile ? "12px" : "16px" }}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  );
};

export default InputField;
