import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type HomeProps = {
  handleGetUserDetail: (item: string) => void;
  fetchingUser: boolean;
  showPersonPage: boolean;
};

const Home = ({
  handleGetUserDetail,
  fetchingUser,
  showPersonPage,
}: HomeProps) => {
  const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        left: `${showPersonPage ? "-100%" : "0"}`,
        transition: "left .2s linear",
      }}
    >
      <Box
        sx={{
          height: "50px",
          backgroundColor: "#333",
          textAlign: "center",
          lineHeight: "50px",
          color: "#fff",
        }}
      >
        Home
      </Box>
      <Box
        sx={{
          backgroundColor: "#fffcff",
          height: "100%",
          padding: "10px",
        }}
      >
        <Typography variant="h4">Top 5 Github users</Typography>
        <Typography variant="h6">
          tap the username to see more information
        </Typography>
        {topFive.map((item) => (
          <Button
            key={item}
            sx={{ margin: "5px 5px 0 0" }}
            variant="contained"
            disabled={fetchingUser}
            onClick={() => handleGetUserDetail(item)}
          >
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
