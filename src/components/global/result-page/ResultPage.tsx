import './resultPage.scss'
import HeaderLocal from '../../local/cover-local/header/HeaderLocal'
import ResultScreen from '../../local/result-local/result-screen/ResultScreen'
import Button from '../../local/result-local/button/Button'
import { useState } from 'react'
import { statisticsProps, headerContentType, } from '../../../type'

function ResultPage({glasses, resultAnswersRight, resultAnswersAll, accuracyAnswers, setAccuracyAnswers, saveData}: statisticsProps) {
   const [headerContent] = useState<headerContentType[]>([{
      title: 'Ваши резуьтаты'
   }])

   return (
      <section className="result__page">
         <div className="result__container container">
            <div className="result__body">
               <HeaderLocal headerContent={headerContent}/>
               <ResultScreen glasses={glasses} resultAnswersRight={resultAnswersRight} resultAnswersAll={resultAnswersAll} accuracyAnswers={accuracyAnswers} setAccuracyAnswers={setAccuracyAnswers}/>
               <Button saveData={saveData}/>
            </div>
         </div>
      </section>
   )
}

export default ResultPage;