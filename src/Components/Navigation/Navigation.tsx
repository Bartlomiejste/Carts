import { Dashboard } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Summary from "../../pages/Summary";

export const Navigation = () => {
  return (
    <>
      <Box>
        <Link to="/carts">
          <Dashboard />
        </Link>
      </Box>
      <Box>
        <Link to="/summary">
          <Summary />
        </Link>
      </Box>
    </>
  );
};
