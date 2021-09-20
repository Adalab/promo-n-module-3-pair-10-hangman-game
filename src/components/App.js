import '../scss/main.scss';
import { useState } from 'react';

function App() {
  const letters = {
    1: 'k',
    2: 'a',
    3: 't',
    4: 'a',
    5: 'k',
    6: 'r',
    7: 'o',
    8: 'k',
    9: 'e',
    10: 'r'
  }
  const  [letter , setLetter] = useState ('')
  
  /*for (const eachLetter of letters) {
    if (letter === eachLetter){


    }
    
  }*/
  
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    setLetter (inputValue);
  }
  
  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>{letter}</li>
            </ul>
          </div>
          <div className='feedback'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'></li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter' onKeyUp={handleInput}
            />
          </form>
        </section>
        <section className='dummy error-5'>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
