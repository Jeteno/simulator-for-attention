import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Cover from './components/global/cover/Cover'
import GameStart from './components/global/start-game/GameStart'
import TimerPage from './components/global/timer-page/TimerPage'
import GamePage from './components/global/game-page/GamePage'
import ResultPage from './components/global/result-page/ResultPage'
import HistoryPage from './components/global/history-page/HistoryPage'
import { useState, useEffect } from 'react'

function App() {
  const [level, setLevel] = useState<number>(1)
  const [bonus, setBonus] = useState<number>(1)
  const [glasses, setGlasses] = useState<number>(0)
  const [resultAnswersRight, setResultAnswersRight] = useState<number>(0)
  const [resultAnswersAll, setResultAnswersAll] = useState<number>(0)
  const [accuracyAnswers, setAccuracyAnswers] = useState<number>(0)

  const [data, setData] = useState<Array<{ date: string; glasses: number }>>([])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const saveData = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${getMonthName(
      currentDate.getMonth()
    )} ${currentDate.getFullYear()}г.`;

    const newData = { date: formattedDate, glasses };
    setData((prevData) => [...prevData, newData]);
  };

  const getMonthName = (monthIndex: number) => {
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return monthNames[monthIndex];
  };

  const resetState = () => {
    setLevel(1)
    setBonus(1)
    setGlasses(0)
    setResultAnswersAll(0)
    setResultAnswersRight(0)
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route
          path={'/'}
          element={<Cover/>}
        />
        <Route
          path={'/Game_Start'}
          element={<GameStart/>}
        />
        <Route
          path={'/Timer'}
          element={<TimerPage/>}
        />
        <Route
          path={'/Game'}
          element={<GamePage level={level} setLevel={setLevel} bonus={bonus} setBonus={setBonus} glasses={glasses} setGlasses={setGlasses} resultAnswersRight={resultAnswersRight} setResultAnswersRight={setResultAnswersRight} resultAnswersAll={resultAnswersAll} setResultAnswersAll={setResultAnswersAll}/>}
        />
        <Route
          path={'/Result'}
          element={<ResultPage glasses={glasses} resultAnswersRight={resultAnswersRight} resultAnswersAll={resultAnswersAll} accuracyAnswers={accuracyAnswers} setAccuracyAnswers={setAccuracyAnswers} saveData={saveData}/>}
        />
        <Route
          path={'/History'}
          element={<HistoryPage glasses={glasses} data={data} resetState={resetState}/>}
        />
      </Routes>
    </div>
  )
}

export default App
