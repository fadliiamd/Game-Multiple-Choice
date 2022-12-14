import { useState } from 'react';
import './App.css';
import Question from './component/Question';
import Start from './component/Start';
import End from './component/End';
import data from './data/quiz.json';

const arrayRandom = ([...arr]) => {
  let x = arr.length;
  while (x > 0) {
    const i = Math.floor(Math.random() * x--);
    [arr[x] , arr[i]] = [arr[i], arr[x]]
  }
  return arr;
}

const resultArray = arrayRandom(data.data).slice(0, 5);


let interval;
function App() {
  const [step, setStap] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [time, setTime] = useState(0);

  const quizStartHandler = () => {
    setStap(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    },1000)
  }

  // console.log(answer)

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler}/>}
      {step === 2 && <Question
        data={resultArray[activeQuestion]}
        onAnswerUpdate={setAnswer}
        activeQuestion={activeQuestion}
        numberOfQuestion={resultArray.length}
        onSetActiveQuestion={setActiveQuestion}
        onesetStep ={setStap}
        time={time}
      />}
      {step === 3 && <End/> }
    </div>
  );
}

export default App;
