import "./App.css";
import CharactersContainer from "./components/compositions/CardsContainer/CharactersContainer";
import LocationsContainer from "./components/compositions/CardsContainer/LocationsContainer";
import EpisodesContainer from "./components/compositions/CardsContainer/EpisodesContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersContainer />} />
          <Route path="episode" element={<EpisodesContainer />} />
          <Route path="location" element={<LocationsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
