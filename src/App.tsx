import { useState } from "react";
import Box from "@mui/material/Box";

import "./App.css";
import Home from "./Home";
import Person from "./Person";

interface ISelectedUser {
  avatar_url: string;
  name: string;
  location: string;
}

function App() {
  const [fetchingUser, setFetching] = useState(false);
  const [selectedUserData, setUserData] = useState<ISelectedUser>({
    avatar_url: "",
    name: "",
    location: "",
  });
  const [showPersonPage, setShowPersonPage] = useState(false);

  const getUserDetail = async (username: string) => {
    setFetching(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setFetching(false);
        setShowPersonPage(true);
      });
  };

  const handleBackHomepage = () => {
    setShowPersonPage(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        maxWidth: "400px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Home
        handleGetUserDetail={getUserDetail}
        fetchingUser={fetchingUser}
        showPersonPage={showPersonPage}
      />
      <Person
        imgUrl={selectedUserData.avatar_url}
        name={selectedUserData.name}
        location={selectedUserData.location}
        showPersonPage={showPersonPage}
        handleBackHomepage={handleBackHomepage}
      />
    </Box>
  );
}

export default App;
