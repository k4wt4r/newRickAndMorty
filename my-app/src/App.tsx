import "./App.css";

import CardsContainer from "./components/compositions/CardsContainer/CardsContainer";
import Layout from "./components/compositions/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <CardsContainer />
      </Layout>
    </div>
  );
}

export default App;
