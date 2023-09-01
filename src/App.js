import {useState} from 'react'
import './App.css';
import Btn from './Btn.js'

function App() {

  const [inputValue , setinputValue] = useState('');

  function screenValue(activeBtn){
   setinputValue(`${inputValue} ${activeBtn}`);
  }

  return (
    <div className="App">
     <h1>Calculator</h1>
     <div className='calc-box'>
      <input className='display-screen' readOnly value={inputValue}></input>
       <Btn screenvalue={screenValue}/>
     </div>
    </div>
  );
}

export default App;
