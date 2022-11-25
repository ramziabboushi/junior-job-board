import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import JobCollector from "./jobCollector";
import TopNav from "./TopNav";
import JOBS from "./jobs";
import CATEGORIES from "./categories";
import {
  JobCategory,
  JobDetailsText,
  JobDetailsTitle,
  PRIMARY_GREEN,
  ACCENT_PURPLE,
  PRIMARY_NAVY
} from "./StyledComponents";

export default function JobBoard({ collectedJobs }) {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES);

  return (
    <>
      <TopNav />
      <Box
        sx={{
          width: 0.8,
          maxWidth: "1120px",
          height: "120px",
          m: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: PRIMARY_NAVY,
            fontSize: "24px",
            textAlign: "left",
            ml: 0
          }}
        >
          Find Work
        </Typography>
        <FormControl
          variant="standard"
          sx={{
            position: "relative",
            boxSizing: "border-box",
            pl: "9px"
          }}
        >
          <Input
            id="input-with-icon-adornment"
            placeholder="Search"
            sx={{ background: "#ffffff", p: "3px 10px", borderRadius: "3px" }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    background: PRIMARY_GREEN,
                    p: "4px",
                    fontSize: "30px",
                    color: "white",
                    position: "absolute",
                    right: "0"
                  }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          width: "80%",
          maxWidth: "1120px",
          height: "100vh",
          m: "0 auto",
          display: "flex"
        }}
      >
        <Box
          sx={{
            width: 0.25,
            height: 0.7,
            mt: "10px",
            mr: "10px",
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <JobDetailsTitle>Skill:</JobDetailsTitle>
          {CATEGORIES.map((category) => (
            <JobCategory
              sx={
                category === selectedCategory
                  ? { backgroundColor: ACCENT_PURPLE }
                  : {}
              }
              onClick={() => setSelectedCategory(category)}
              key={category}
            >
              {category}
            </JobCategory>
          ))}
        </Box>
        <Box
          sx={{
            width: 1,
            maxWidth: "1120px",
            height: 0.89,
            boxSizing: "border-box"
          }}
        >
          <JobCollector
            selectedCategory={selectedCategory}
            collectedJobs={collectedJobs}
          />
        </Box>
      </Box>
    </>
  );
}
