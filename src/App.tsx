import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { AppContextProvider } from "./AppContext/AppContext";
import SingleCart from "./Components/SingleCart/SingleCart";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<SingleCart />} path="/:id/" />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
