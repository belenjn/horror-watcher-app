import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExplorePage } from "./components/explore-page/ExplorePage";
import { GridCardDetails } from "./components/grid-card-details/GridCardDetails";
import { Login } from "./components/login/Login";
import { NotFound } from "./components/not-found/NotFound";
import { Register } from "./components/register/Register";
import { WelcomePage } from "./components/welcome-page/WelcomePage";
import { apiKey } from "./env";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ExplorePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details" element={<GridCardDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
