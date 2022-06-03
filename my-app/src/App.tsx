import "./App.css";
import Header from "./components/compositions/Header/Header";
import NavBar from "./components/compositions/Navbar/NavBar";
import CharactersHeaderContent from "./components/compositions/pages/CharactersPage/HeaderContent/CharactersHeaderContent";
import CardsContainer from "./components/compositions/CardsContainer/CardsContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header
        imgSrc="/images/rickAmorty.png"
        HeaderContent={CharactersHeaderContent}
      />
      <CardsContainer />
    </div>
  );
}

export default App;
