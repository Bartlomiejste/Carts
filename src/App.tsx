import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import { AppContextProvider } from "./AppContext/AppContext";
import Carts from "./Components/Carts/Carts";
import { Box } from "@mui/material";
import SingleCart from "./Components/SingleCart/SingleCart";

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<SingleCart />} path="/:id/" />
        <Route element={<Summary />} path="/summary" />
        <Route element={<Box>Error 404 - try refresh page</Box>} path="*" />
      </Routes>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;
