import { statisticsProps } from '../../../../type'
import { useEffect } from 'react'

function ResultScreen({glasses, resultAnswersRight, resultAnswersAll, accuracyAnswers, setAccuracyAnswers}: statisticsProps) {
   function calculateAccuracy(right: number, all:number) {
      if(setAccuracyAnswers) {
         setAccuracyAnswers((right/all)*100)
      }
   }

   useEffect(()=> {
      if(resultAnswersRight && resultAnswersAll) {
         calculateAccuracy(resultAnswersRight, resultAnswersAll)
      }
   }, [])

   return (
      <div className="game-screen-content__page page">
         <div className="game-screen-content__container container">
            <div className="game-screen-content__body body">
               <table className="game-screen__table">
                  <tr className="game-screen__table-row">
                     <td className="game-screen__table-cell">
                        Текущий результат
                     </td>
                     <td className="game-screen__table-cell">
                        {glasses}
                     </td>
                  </tr>
                  <tr className="game-screen__table-row">
                     <td className="game-screen__table-cell">
                        Верных ответов
                     </td>
                     <td className="game-screen__table-cell">
                        {resultAnswersRight} из {resultAnswersAll}
                     </td>
                  </tr>
                  <tr className="game-screen__table-row">
                     <td className="game-screen__table-cell">
                        Точность ответов
                     </td>
                     <td className="game-screen__table-cell">
                        {!Number.isNaN(accuracyAnswers) && accuracyAnswers ? accuracyAnswers.toFixed(2) : 0}%
                     </td>
                  </tr>
               </table>
            </div>
         </div>
      </div>
   )
}

export default ResultScreen