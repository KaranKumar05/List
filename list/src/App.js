import React, { useState } from 'react';
import './App.css';

// Components 
import Header from './components/Header/header';
import Item from './components/Items/items';

function App() {
  // State to store number of inputs to rendered. 
  const [itemInputs, setItemInputs] = useState(1);

  // Logic to Create Input on Button press
  const addInputHandler = () => {
    setItemInputs(itemInputs + 1);
  };

  // Logic to handle Enter press
  const enterPressHandler = () => {
    setItemInputs(itemInputs + 1);
  };

  return (
    <div className="App">
      <div className='parent'>
        <Header />
        <div className='itemField'>
          <button onClick={addInputHandler}>Add Item</button>
          <Item inputCount={itemInputs} onEnterPress={enterPressHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
