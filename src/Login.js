import * as React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

import MyLogo from "./122.png";

import {
  PrimaryButton,
  LoginBox,
  LoginContainer,
  LoginInput,
  PRIMARY_GREEN,
  PRIMARY_NAVY,
  ACCENT_PURPLE
} from "./StyledComponents";

export default function Login({ setLoggedIn }) {
  return (
    <>
      <LoginContainer>
        <LoginBox>
          <Box>
            <img src={MyLogo} alt="" height="100px" />
          </Box>
          <FormControl sx={{ width: "60%", mt: "35px" }}>
            <LoginInput
              id="input-with-icon-adornment"
              placeholder="Username or Email"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: ACCENT_PURPLE }} />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ width: "60%" }}>
            <LoginInput id="password" placeholder="Password" />
          </FormControl>
          <PrimaryButton
            variant="contained"
            sx={{
              mt: "25px",
              width: "40%",
              textTransform: "none",
              fontSize: "16px"
            }}
            onClick={() => setLoggedIn(true)}
          >
            Continue
          </PrimaryButton>
        </LoginBox>
      </LoginContainer>
    </>
  );
}
