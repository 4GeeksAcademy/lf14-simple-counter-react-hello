import React, { useState, useEffect } from 'react';

function SimpleCounter() {
  const [digitSix, setDigitSix] = useState(0);
  const [digitFive, setDigitFive] = useState(0);
  const [digitFour, setDigitFour] = useState(0);
  const [digitThree, setDigitThree] = useState(0);
  const [digitTwo, setDigitTwo] = useState(0);
  const [digitOne, setDigitOne] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      if (isRunning) {
        setDigitOne((prevDigitOne) => (prevDigitOne + 1) % 10);
        if (digitOne === 9) {
          setDigitTwo((prevDigitTwo) => (prevDigitTwo + 1) % 10);
          if (digitTwo === 9) {
            setDigitThree((prevDigitThree) => (prevDigitThree + 1) % 10);
            if (digitThree === 9) {
              setDigitFour((prevDigitFour) => (prevDigitFour + 1) % 10);
              if (digitFour === 9) {
                setDigitFive((prevDigitFive) => (prevDigitFive + 1) % 10);
                if (digitFive === 9) {
                  setDigitSix((prevDigitSix) => (prevDigitSix + 1) % 10);
                }
              }
            }
          }
        }
      }
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [digitOne, digitTwo, digitThree, digitFour, digitFive, isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setDigitSix(0);
    setDigitFive(0);
    setDigitFour(0);
    setDigitThree(0);
    setDigitTwo(0);
    setDigitOne(0);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body bg-dark">
              <div className="d-flex justify-content-center">
              <div className="badge bg-dark text-center mt-4">
                <i className="far fa-clock fa-5x text-bg-dark"></i>
              </div>
                <div className="badge bg-dark mr-3">
                  <h1 className="display-1 text-bg-dark">{digitSix}</h1>
                </div>
                <div className="badge bg-dark mr-3">
                  <h1 className="display-1 text-bg-dark">{digitFive}</h1>
                </div>
                <div className="badge bg-dark mr-3">
                  <h1 className="display-1 text-bg-dark">{digitFour}</h1>
                </div>
                <div className="badge bg-dark mr-3">
                  <h1 className="display-1 text-bg-dark">{digitThree}</h1>
                </div>
                <div className="badge bg-dark mr-3">
                  <h1 className="display-1 text-bg-dark">{digitTwo}</h1>
                </div>
                <div className="badge bg-dark mr-3">
                  <h1 className="display-1 text-bg-dark">{digitOne}</h1>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
                <button className="btn btn-danger mr-2" onClick={handleStop}>Parar</button>
                <button className="btn btn-success mr-2" onClick={handleStart}>Resumir</button>
                <button className="btn btn-warning" onClick={handleReset}>Reiniciar</button>
              </div>
    </div>
  );
}

export default SimpleCounter;