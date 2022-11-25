import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";

export const PRIMARY_GREEN = "#007D87";
export const ACCENT_PURPLE = "#331E7D";
export const PRIMARY_NAVY = "#050A30";
const SECONDARY_NAVY = "#2B5468";

export const LoginContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#0A1929",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const LoginBox = styled(Box)(() => ({
  width: 600,
  height: 400,
  p: 20,
  backgroundColor: PRIMARY_NAVY,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  borderRadius: 10
}));

export const LoginInput = styled(Input)(() => ({
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: 5,
  margin: "5px 0",
  padding: "3px 5px",
  color: "white"
}));

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  borderRadius: "25px"
}));

export const JobCategory = styled(Typography)(() => ({
  variant: "h6",
  width: "max-content",
  height: "max-content",
  color: "white",
  fontSize: "12px",
  textAlign: "left",
  backgroundColor: PRIMARY_GREEN,
  margin: "2px",
  padding: "4px 6px",
  borderRadius: "4px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
}));

export const JobBox = styled(Box)(() => ({
  background: "#ffffff",
  height: "auto",
  mb: "2px",
  p: "20px 30px",
  boxSizing: "border-box",
  ml: "10px"
}));

export const JobDetailsTitle = styled(Typography)(() => ({
  variant: "h5",
  fontWeight: "600",
  color: PRIMARY_NAVY,
  fontSize: "20px",
  textAlign: "left",
  marginBottom: "0px",
  width: "100%"
}));

export const JobDetailsText = styled(Typography)(() => ({
  variant: "h6",
  fontWeight: "600",
  color: "#666666",
  fontSize: "15px",
  textAlign: "left",
  marginBottom: "10px"
}));
