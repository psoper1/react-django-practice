import { useState } from 'react';
import { v4 } from 'uuid'


function HomePage({ data, view, setView }) {

  let input = document.getElementById('input');
  let hero_call = data.filter((hero) => hero.name.includes(input.value)).map((ree) =>
  
    <>
      <h1 key={ree.id} className="text-center">{ree.name}</h1>
      <p key={ree.name} className="text-center">About Hero: {ree.about_me}</p>
      <p className="text-center">Abilities:</p>
      {ree.abilities.map((ree2) => <li key={v4()} className="text-center">{ree2.ability_name}</li>)}
    </>)
  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setView('null');
    setInputValue("");
  };

  return (
    <>
      <div className="text-center">
        <h1>Home page</h1>
        <input id="input" placeholder="Type a hero name to search" value={inputValue} onChange={handleUserInput} />
        <button className="btn btn-primary" onClick={() => setView('Show all')}>Click to search</button>
        <button className="btn btn-secondary" onClick={resetInputField}>Refresh Results</button>
      </div>
      {view === 'Show all' && hero_call}
    </>
  )
}

export default HomePage