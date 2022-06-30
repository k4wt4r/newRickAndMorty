import "./App.css";
import CharactersContainer from "./components/compositions/CardsContainer/CharactersContainer";
import LocationsContainer from "./components/compositions/CardsContainer/LocationsContainer";
import EpisodesContainer from "./components/compositions/CardsContainer/EpisodesContainer";
function App() {
  return (
    <div className="App">
      <LocationsContainer />
      {/* <CharactersContainer /> */}
      {/* <EpisodesContainer /> */}
    </div>
  );
}

export default App;
