import './resultPage.scss'
import HeaderLocal from '../../local/cover-local/header/HeaderLocal'
import ResultScreen from '../../local/result-local/result-screen/ResultScreen'
import Button from '../../local/result-local/button/Button'
import { useState } from 'react'
import { statisticsProps, headerContentType, resetState} from '../../../type'

type Props = {
   resetState: resetState,
   glasses: statisticsProps,
   resultAnswersRight: statisticsProps,
   resultAnswersAll: statisticsProps,
   accuracyAnswers: statisticsProps,
   setAccuracyAnswers: statisticsProps,
}

function ResultPage({glasses, resultAnswersRight, resultAnswersAll, accuracyAnswers, setAccuracyAnswers, resetState}: Props) {
   const [headerContent, setHeaderContent] = useState<headerContentType[]>([{
      title: 'Ваши резуьтаты'
   }])

   return (
      <section className="result__page">
         <div className="result__container container">
            <div className="result__body">
               <HeaderLocal headerContent={headerContent}/>
               <ResultScreen glasses={glasses} resultAnswersRight={resultAnswersRight} resultAnswersAll={resultAnswersAll} accuracyAnswers={accuracyAnswers} setAccuracyAnswers={setAccuracyAnswers}/>
               <Button resetState={resetState}/>
            </div>
         </div>
      </section>
   )
}

export default ResultPage;