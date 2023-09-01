import {useState} from 'react'
import './App.css';
import Btn from './Btn.js'

function App() {

  const [inputValue , setinputValue] = useState('');

  function screenValue(activeBtn){
   setinputValue(`${inputValue}${activeBtn}`);
  }
  
  function calculate(){
    let result = eval(inputValue);
    if(!isNaN(result))
    {
      prompt("enter a valid expression");
    }
    else{
      setinputValue(result);
    }
  }

  function clear(){
    setinputValue('');
  }

  function removeEach(){
   let stringvalue = inputValue.toString();
   setinputValue(stringvalue.slice(0,-1));
  }
  return (
    <div className="App">
     <h1>Calculator</h1>
     <div className='calc-box'>
      <input className='display-screen' readOnly value={inputValue}></input>
       <Btn screen ={screenValue} displayResult = {calculate} wipeoff = {clear} cancel={removeEach}/>
     </div>
    </div>
  );
}

export default App;
