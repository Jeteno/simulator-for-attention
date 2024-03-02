import '../result-page/resultPage.scss'
import './historyPage.scss'
import HeaderLocal from "../../local/cover-local/header/HeaderLocal"
import CurrentResult from '../../local/history-page-local/current-result/CurrentResult'
import HistoryResult from '../../local/history-page-local/hestory-result/HistoryResult'
import Button from '../../local/history-page-local/button/Button'
import { useState } from "react"
import { statisticsProps, headerContentType, } from '../../../type'


function HistoryPage({glasses, data, resetState}: statisticsProps) {
   const [headerContent] = useState<headerContentType[]>([{
      title: 'Ваши резуьтаты'
   }])

   return (
      <section className="result__page">
         <div className="result__container container">
            <div className="result__body">
               <HeaderLocal headerContent={headerContent}/>
               <div className="result__table">
                  <CurrentResult glasses={glasses}/>
                  <HistoryResult data={data}/>
               </div>
               <Button resetState={resetState}/>
            </div>
         </div>
      </section>
   )
}

export default HistoryPage