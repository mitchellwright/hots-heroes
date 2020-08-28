import React from "react";
import { useThunkReducer } from "react-hook-thunk-reducer";
import HeroSearch from "./components/HeroSearch";
import HeroInfoCard from "./components/HeroInfoCard";
import { HeroContext } from "./contexts/HeroContext";
import { heroReducer } from "./reducers/heroReducer";

const initialState = { hero: {}, isFetching: false, error: "" };

function App() {
  const [state, dispatch] = useThunkReducer(heroReducer, initialState);

  return (
    <div className="App">
      <HeroContext.Provider value={{ state, dispatch }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <HeroSearch />
            <HeroInfoCard />
          </div>
        </div>
      </HeroContext.Provider>
    </div>
  );
}

export default App;
