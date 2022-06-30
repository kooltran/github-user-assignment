import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

type PersonProps = {
  handleBackHomepage: () => void;
  imgUrl: string;
  name: string;
  location: string;
  showPersonPage: boolean;
};

const Person = ({
  imgUrl,
  name,
  location,
  showPersonPage,
  handleBackHomepage,
}: PersonProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        width: "100%",
        right: `${showPersonPage ? "0" : "-100%"}`,
        height: "100%",
        transition: "right .2s linear",
      }}
    >
      <Box
        sx={{
          height: "50px",
          backgroundColor: "#333",
          textAlign: "center",
          lineHeight: "50px",
          color: "#fff",
          position: "relative",
        }}
      >
        <Box
          onClick={handleBackHomepage}
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: 0,
            top: 0,
            cursor: "pointer",
          }}
        >
          <ArrowBackIosOutlinedIcon />
          Back
        </Box>
        Person
      </Box>
      <Box sx={{ backgroundColor: "#fffcff", height: "calc(100vh - 50px)" }}>
        <Box
          sx={{
            padding: "10px 20px",
            display: "flex",
            boxSizing: "border-box",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar alt="Remy Sharp" src={imgUrl} />
          <Box
            sx={{
              width: "100%",
              marginLeft: "10px",
              borderBottom: "1px solid #ddd",
              padding: "5px 0",
            }}
          >
            <Typography fontWeight={600} fontSize="16px">
              {name}
            </Typography>
            <Typography fontSize="14px">{location}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Person;
