import './timerPage.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function TimerPage () {
   const [counter, setCounter] = useState<number>(3)
   const navigate = useNavigate();

   function startTimer() {
      setTimeout(() => {
         if(counter > 0) {
            setCounter(counter - 1)
         } else {
            navigate('/Game');
         }
      }, 1000)

      return counter
   }

   useEffect(() => {
      startTimer();
   }, [counter])

   return (
      <section className="timer__page">
         <div className="timer__container container">
            <div className="timer__body">
               <div className="timer__counter">
                  <h2 className="timer__counter-title">{counter}</h2>
               </div>
            </div>
         </div>
      </section>
   )
}

export default TimerPage;