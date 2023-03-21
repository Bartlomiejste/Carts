import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { AppContextProvider } from "./AppContext/AppContext";
import SingleCart from "./Components/SingleCart/SingleCart";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    {/* czy do errora muszę jeszcze coś zrobić z suspense?  */}
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<SingleCart />} path="/:id/" />
          {/* <Route element={<Box>Error 404 - try refresh page</Box>} path="*" /> - to jest teraz nie potrzebne jak mam error boundary? */}
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
