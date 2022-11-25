import TopNav from "./TopNav";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VerifiedIcon from "@mui/icons-material/Verified";

import { JobCategory, PRIMARY_GREEN, JobDetailsText } from "./StyledComponents";

export default function JobDetail({ JOBS }) {
  let { id: idFromURL } = useParams();

  const selectedJob = JOBS.find((job) => {
    return job.id === Number(idFromURL);
  });

  return (
    <>
      <TopNav />
      <Box
        sx={{
          width: 0.8,
          height: "100vh",
          m: "0 auto",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            width: 0.5,
            p: "20px"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: "#5D5C5C",
              fontSize: "25px",
              textAlign: "left"
            }}
          >
            {selectedJob.title}
          </Typography>
          <Divider
            variant="middle"
            sx={{ m: "30px 0", marginLeft: "0", width: 0.9 }}
          />
          <JobCategory sx={{ color: PRIMARY_GREEN, fontWeight: "600" }}>
            {selectedJob.category}
          </JobCategory>
          <JobDetailsText sx={{ m: "14px 0" }}>
            Posted {selectedJob.postedTime}
          </JobDetailsText>
          <JobDetailsText>
            <Box
              component="img"
              alt=""
              src="https://assets.codepen.io/6060109/location-icon.png"
              sx={{
                width: "20px",
                mr: "7px",
                boxSizing: "border-box",
                mb: "-5px"
              }}
            />
            {selectedJob.remote && "Remote"}, {selectedJob.location}
          </JobDetailsText>
          <Divider
            variant="middle"
            sx={{ m: "30px 0", marginLeft: "0", width: 0.9 }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#666666",
              fontSize: "14px",
              textAlign: "left"
            }}
          >
            {selectedJob.description}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 0.35,
            height: "60vh",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: PRIMARY_GREEN,
              width: "200px",
              m: "20px 0",
              borderRadius: "30px",
              textTransform: "none"
            }}
          >
            Submit a Proposal
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "200px",
              color: PRIMARY_GREEN,
              border: `1px solid ${PRIMARY_GREEN}`,
              borderRadius: "30px",
              textTransform: "none"
            }}
            startIcon={<FavoriteBorderIcon />}
          >
            Save Job
          </Button>
          <Divider variant="middle" sx={{ m: "30px 0", width: 1 }} />
          <Box sx={{ width: "200px" }}>
            <JobDetailsText sx={{ textAlign: "left" }}>
              About the client
            </JobDetailsText>
            <JobDetailsText sx={{ fontSize: "12px", mb: "30px" }}>
              <VerifiedIcon
                sx={{
                  width: "20px",
                  mr: "7px",
                  boxSizing: "border-box",
                  mb: "-8px",
                  color: PRIMARY_GREEN
                }}
              />
              Payment {selectedJob.paymentVerified ? "verified" : "unverified"}
            </JobDetailsText>
            <JobDetailsText sx={{ fontSize: "12px", mb: "0px" }}>
              <Box
                component="img"
                alt=""
                src="https://assets.codepen.io/6060109/location-icon.png"
                sx={{
                  width: "20px",
                  mr: "7px",
                  boxSizing: "border-box",
                  mb: "-5px"
                }}
              />
              {selectedJob.remote && "Remote"}, {selectedJob.location}
            </JobDetailsText>
          </Box>
          <Divider variant="middle" sx={{ m: "30px 0", width: 1 }} />
          <Box sx={{ width: "200px" }}>
            <JobDetailsText sx={{ textAlign: "left" }}>Job Link</JobDetailsText>
            <Box
              sx={{
                width: "200px",
                backgroundColor: "#F2F2F2",
                height: "30px",
                overflow: "hidden"
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "darkgrey",
                  fontSize: "14px",
                  textAlign: "left",
                  m: "4px 10px"
                }}
              >
                {window.location.href}
              </Typography>
            </Box>
            <JobDetailsText
              sx={{
                textAlign: "left",
                color: PRIMARY_GREEN,
                marginTop: "20px"
              }}
            >
              Copy Link
            </JobDetailsText>
          </Box>
        </Box>
      </Box>
    </>
  );
}
