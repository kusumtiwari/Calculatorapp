import {useState} from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Calculator</h1>
     <div className='calc-box'>
      <input className='display-screen' readOnly></input>
      <div className='btns'>
        <button className='number'>0</button>
        <button className='number'>1</button>
        <button className='number'>2</button>
        <button className='number'>3</button>
        <button className='number'>4</button>
        <button className='number'>5</button>
        <button className='number'>6</button>
        <button className='number'>7</button>
        <button className='number'>8</button>
        <button className='number'>9</button>
        <button className='add'>+</button>
        <button className='sub'>-</button>
        <button className='divide'>/</button>
        <button className='multiply'>*</button>
        <button className='equalto'>=</button>
        <button className='delete'>Del</button>
        <button className='clear'>Clr</button>
      </div>
     </div>
    </div>
  );
}

export default App;
