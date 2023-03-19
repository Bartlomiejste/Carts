import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Dashboard";
import Summary from "./pages/Summary";
import { AppContextProvider } from "./AppContext/AppContext";
import Carts from "./Components/Carts/Carts";

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Carts />} path="/:id" />
        <Route element={<Summary />} path="/summary" />
        <Route element={<div>Error 404 - try refresh page</div>} path="*" />
      </Routes>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;
