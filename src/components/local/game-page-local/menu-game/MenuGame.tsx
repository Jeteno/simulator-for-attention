import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { statisticsProps } from '../../../../type'

function MenuGame({level, glasses, bonus}: statisticsProps) {
   const [counter, setCounter] = useState<number>(60)
   const navigate = useNavigate()

   function startTimerGame() {
      setTimeout(()=> {
         if(counter > 0) {
            setCounter(counter - 1)
         } else {
            navigate('/Result')
         }
      }, 1000)

      return counter
   }

   useEffect(() => {
      startTimerGame()
   }, [counter])

   return (
      <div className="game-menu__wrapper">
         <div className="game-menu__body">
            <div className="game-menu__body-title">
               <h3 className="game-menu__body-title-h">
                  Время
               </h3>
            </div>
            <div className="game-menu__body-subtime">
               <p className="game-menu__body-subtime-p">
                  {counter === 60 
                     ? `01:00` 
                     : `00:${counter === 0 ? `00` : `${counter < 10 ? `0${counter}` : `${counter}`}`}`
                  }
               </p>
            </div>
         </div>
         <div className="game-menu__body">
            <div className="game-menu__body-title">
               <h3 className="game-menu__body-title-h">
                  Уровень
               </h3>
            </div>
            <div className="game-menu__body-subtime">
               <p className="game-menu__body-subtime-p">
                  {`${level}-9`}
               </p>
            </div>
         </div>
         <div className="game-menu__body">
            <div className="game-menu__body-title">
               <h3 className="game-menu__body-title-h">
                  Очки
               </h3>
            </div>
            <div className="game-menu__body-subtime">
               <p className="game-menu__body-subtime-p">
                  {glasses}
               </p>
            </div>
         </div>
         <div className="game-menu__body">
            <div className="game-menu__body-title">
               <h3 className="game-menu__body-title-h">
                  Бонус
               </h3>
            </div>
            <div className="game-menu__body-subtime">
               <p className="game-menu__body-subtime-p">
                  x{bonus}
               </p>
            </div>
         </div>
      </div>
   )
}

export default MenuGame