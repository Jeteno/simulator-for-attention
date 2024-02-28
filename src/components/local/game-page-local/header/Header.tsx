import { desiredOptionProps } from '../../../../type'

function HeaderStart({desiredOption}: desiredOptionProps) {

   return (
      <div className="example__content">
         <div className="example__subtitle">
            <p className="example__subtitle-p">
               Найдите указанное число:
            </p>
         </div>
         <div className="example__title">
            <h2 className="example__title-h">
               {desiredOption.answer}
            </h2>
         </div>
      </div>
   )
}

export default HeaderStart

