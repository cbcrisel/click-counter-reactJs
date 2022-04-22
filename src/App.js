import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import Devour from './images/Devour.jpg'
import {useState} from 'react';

function App() {

  const[clickNums,setClickNums]=useState(0);

  const clickHandler=()=>{
    console.log('Click')
    setClickNums( clickNums+1);
  }
  const restartCounter=()=>{
    console.log('Reiniciar')
    setClickNums(0);
  }
  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
          src={Devour}
          alt='Logo Devour'
        ></img>
      <div className='main-container'>
          <Counter clickNums={clickNums}>

          </Counter>
          <Button
            text='Click'
            isClickButton={true}
            clickHandler={clickHandler}>
          </Button>
          <Button
          text='Reiniciar'
          isClickButton={false}
          clickHandler={restartCounter}>
          </Button>
      </div>
      </div>
    </div>
  );
}

export default App;
