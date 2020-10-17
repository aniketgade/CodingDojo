import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {

  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);

 
  return (
    <div className="App">
      <BoxForm color={color} setColor={setColor} colorList={colorList} setColorList={setColorList}/>
      <BoxDisplay colorList={colorList}/>
    </div>
  );
}

export default App;
