import React, { useState } from 'react'
import Header from '../components/Header';

function About() {
  const [count, setCount ] = useState(0);
  const [bgColor, setBgColor] = useState('red');

  const handlCounterDesc = () => {
    setCount((prevState) => prevState - 1)
  }

  const handlCounterInc = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const handlCounterReset = () => {
    setCount(0);
  }
  
  return (
    <>
      <Header />
      <div className="container my-5 p-5" style={{backgroundColor: bgColor}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="counter">
                  <h1 style={{fontSize: 100}}>{count}</h1>
                  <hr />
                  <button onClick={handlCounterDesc} className='btn btn-danger'>--</button>&nbsp;
                  <button onClick={handlCounterInc} className='btn btn-success'>++</button>&nbsp;
                  <button onClick={handlCounterReset} className='btn btn-warning'>Reset</button>
                  <hr />
                  <button onClick={() => setBgColor('red')}>Red</button>
                  <button onClick={() => setBgColor('green')}>Green</button>
                  <button onClick={() => setBgColor('blue')}>Blue</button>
                  <button onClick={() => setBgColor('tomato')}>Tomato</button>
                  <button onClick={() => setBgColor('black')}>Black</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
