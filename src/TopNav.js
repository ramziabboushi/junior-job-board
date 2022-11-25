import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import MyLogo from "./122.png";

export default function TopNav() {
  return (
    <>
      <AppBar position="static" sx={{ background: "#050A30" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "80%",
            maxWidth: "1120px",
            m: "0 auto"
          }}
        >
          <Box sx={{ w: "150px" }}>
            <img src={MyLogo} alt="" height="60px" />
          </Box>
          <Box>
            <Link to="/jobs" style={{ color: "white", textDecoration: "none" }}>
              <Button color="inherit" sx={{ textTransform: "none" }}>
                Find a Job
              </Button>
            </Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{ ml: "30px", textTransform: "none" }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
