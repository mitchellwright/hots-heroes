import React, { useState } from "react";
import HeroInfoButton from "./HeroInfoButton";

const HeroSearch = () => {
  const [heroInput, setHeroInput] = useState("");

  return (
    <div>
      <label
        htmlFor="hero"
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        Choose a hero
      </label>
      <select
        id="hero"
        name="hero"
        value={heroInput}
        onChange={(e) => setHeroInput(e.target.value)}
        aria-describedby="hero-name"
        className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      >
        <option>Abathur</option>
        <option>Alarak</option>
        <option>Alexstraza</option>
        <option>Ana</option>
        <option>Anduin</option>
        <option>Anub'arak</option>
        <option>Artanis</option>
        <option>Arthas</option>
        <option>Auriel</option>
        <option>Azmodan</option>
        <option>Blaze</option>
        <option>Brightwing</option>
        <option>Cassia</option>
        <option>Chen</option>
        <option>Cho</option>
        <option>Chromie</option>
        <option>Deckard</option>
        <option>D.Va</option>
        <option>Dehaka</option>
        <option>Diablo</option>
        <option>E.T.C.</option>
        <option>Falstad</option>
        <option>Fenix</option>
        <option>Gall</option>
        <option>Garrosh</option>
        <option>Gazlowe</option>
        <option>Genji</option>
        <option>Greymane</option>
        <option>Gul'dan</option>
        <option>Hanzo</option>
        <option>Illidan</option>
        <option>Imperius</option>
        <option>Jaina</option>
        <option>Johanna</option>
        <option>Junkrat</option>
        <option>Kael'thas</option>
        <option>Kel'thuzad</option>
        <option>Kerrigan</option>
        <option>Kharazim</option>
        <option>Leoric</option>
        <option>Li Li</option>
        <option>Li-Ming</option>
        <option>Lt. Morales</option>
        <option>Lucio</option>
        <option>Lunara</option>
        <option>Maiev</option>
        <option>Malfurion</option>
        <option>Mal'ganis</option>
        <option>Malthael</option>
        <option>Medivh</option>
        <option>Mephisto</option>
        <option>Muradin</option>
        <option>Murky</option>
        <option>Nazeebo</option>
        <option>Nova</option>
        <option>Orphea</option>
        <option>Probius</option>
        <option>Qhira</option>
        <option>Ragnaros</option>
        <option>Raynor</option>
        <option>Rehgar</option>
        <option>Rexxar</option>
        <option>Samuro</option>
        <option>Sgt. Hammer</option>
        <option>Sonya</option>
        <option>Stitches</option>
        <option>Stukov</option>
        <option>Sylvanas</option>
        <option>Tassadar</option>
        <option>The Butcher</option>
        <option>The Lost Vikings</option>
        <option>Thrall</option>
        <option>Tracer</option>
        <option>Tychus</option>
        <option>Tyrael</option>
        <option>Tyrande</option>
        <option>Uther</option>
        <option>Valeera</option>
        <option>Valla</option>
        <option>Varian</option>
        <option>Whitemane</option>
        <option>Xul</option>
        <option>Yrel</option>
        <option>Zagara</option>
        <option>Zarya</option>
        <option>Zeratul</option>
        <option>Zul'jin</option>
      </select>
      <div className="mt-1 relative rounded-md shadow-sm"></div>
      <HeroInfoButton heroInput={heroInput} setHeroInput={setHeroInput} />
    </div>
  );
};

export default HeroSearch;
