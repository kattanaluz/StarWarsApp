import "./App.css";
import { Routes, Route } from "react-router-dom";
import CharacterList from "../CharacterList";
import CharacterDetails from "../CharacterDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
