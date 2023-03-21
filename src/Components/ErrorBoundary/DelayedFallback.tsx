import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export const DelayedFallback = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      {show && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            color: "#ffff",
            background: "#70674E",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", fontSize: "40px", margin: "50px" }}
          >
            Ups! Something went wrong...
          </Typography>
          <Typography sx={{ fontSize: "30px", opacity: "0.5", margin: "50px" }}>
            Refresh or back to main page
          </Typography>
          <Button
            onClick={refreshPage}
            sx={{
              fontSize: "20px",
              height: "80px",
              width: "250px",
              margin: "50px",
              cursor: "pointer",
              textDecoration: "none",
              color: "#000",
              borderRadius: "10px",
              background: "#ffff",
            }}
          >
            Refresh
          </Button>
        </Box>
      )}
    </>
  );
};
export default DelayedFallback;
