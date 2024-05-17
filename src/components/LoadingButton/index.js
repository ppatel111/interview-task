import React from "react";
import {
  Button,
  CircularProgress,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

const StyledButton = styled(Button)`
  background-color: #7d97ff;
  border-radius: 60px;
  padding: ${({ isMobile }) => (isMobile ? "12.09px 20px" : "15px 40px")};
  text-transform: none;
  &:hover {
    background-color: #7d97ff;
  }
  &:disabled {
    background-color: #ced6f7;
  }
  .MuiTouchRipple-root {
    display: none;
  }
`;

const LoadingButton = ({ children, isLoading, disabled, ...props }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <StyledButton disabled={disabled} isMobile={isMobile} {...props}>
      {isLoading ? (
        <CircularProgress size={isMobile ? 12 : 18} sx={{ color: "#fff" }} />
      ) : (
        <Typography
          color={"#fff"}
          fontWeight={700}
          fontSize={isMobile ? 12 : 18}
        >
          {children}
        </Typography>
      )}
    </StyledButton>
  );
};

export default LoadingButton;
