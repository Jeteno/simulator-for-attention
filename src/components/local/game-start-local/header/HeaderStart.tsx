import { answerValuesProps } from '../../../../type'

function HeaderStart({answerValues}: answerValuesProps) {
   return (
      <div className="example__content">
         <div className="example__subtitle">
            <p className="example__subtitle-p">
               Найдите указанное число:
            </p>
         </div>
         <div className="example__title">
            <h2 className="example__title-h">
               {answerValues[0].answer}
            </h2>
         </div>
      </div>
   )
}

export default HeaderStart