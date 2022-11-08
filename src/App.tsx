import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckAuth } from "./components/check-auth/CheckAuth";
import { WelcomePage } from "./components/welcome-page/WelcomePage";
import { useAppSelector } from "./hooks/redux-hooks";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { AuthRoutes } from "./routes/auth/AuthRoutes";
import { MoviesRoutes } from "./routes/movies/MoviesRoutes";
import { Movie } from "./types/movie";

function App() {
  const moviesLists: Movie[] = useAppSelector((state) => state.movies.movies);

  const { status } = useCheckAuth();

  if (status === "checking") {
    <CheckAuth />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          
          {status === "authenticated" ? (
            <Route path="/*" element={<MoviesRoutes movies={moviesLists} />} />
          ) : (
            <Route path="/auth/*" element={<AuthRoutes />} />
          )}

          <Route path="*" element={<CheckAuth />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
