import {useRef, useState} from 'react';

// const clicked = useRef(null);
export default function Buttons (props){

const [clicked , setclicked] = useState(false);

const display = (e) => {
 e.target.style.backgroundColor = '#D2B48C';
 setTimeout( () => e.target.style.backgroundColor = 'rgb(218, 204, 204)' , 300);
 props.screen(e.target.textContent);
}
    return(
        <div className='btns'>
        <button className='number' onClick={display} >0</button>
        <button className='number' onClick={display} >1</button>
        <button className='number' onClick={display} >2</button>
        <button className='number' onClick={display} >3</button>
        <button className='number' onClick={display} >4</button>
        <button className='number' onClick={display} >5</button>
        <button className='number' onClick={display} >6</button>
        <button className='number' onClick={display} >7</button>
        <button className='number' onClick={display} >8</button>
        <button className='number' onClick={display} >9</button>
        <button className='add' onClick={display} >+</button>
        <button className='sub' onClick={display} >-</button>
        <button className='divide' onClick={display} >/</button>
        <button className='multiply' onClick={display} >*</button>
        <button className='equalto' onClick={props.displayResult}>=</button>
        <button className='delete' onClick={props.cancel}>Del</button>
        <button className='clear' onClick={props.wipeoff}>Clr</button>
      </div>
    )
}