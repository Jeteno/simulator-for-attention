import { useState } from "react"
import { listValuesType } from '../../../type'

function GameScreenContent () {
   const [listValues, setListValues] = useState<listValuesType[]>([
      {
         title: 'Произвольное внимание',
         subtitle: 'Научитесь концентрировать внимание только на важном',
         src: '../../../../public/cover/game-screen/icon-1.svg',
         alt: 'icon-1',
      },
      {
         title: 'Концентрацию и переключение внимания',
         subtitle: 'Позволит не упускать из виду важные детали',
         src: '../../../../public/cover/game-screen/icon-2.svg',
         alt: 'icon-2',
      },
      {
         title: 'Зрительное восприятие',
         subtitle: 'Сможете быстро находить основные мысли в текстах',
         src: '../../../../public/cover/game-screen/icon-3.svg',
         alt: 'icon-3',
      },
   ])

   return (
      <section className="game-screen-content__page page">
         <div className="game-screen-content__container container">
            <div className="game-screen-content__body body">
               <div className="game-screen-content__title">
                  <h2 className="game-screen-content__title-h">
                     Тренирует:
                  </h2>
               </div>
               <ul className="game-screen-content__list">
                  {listValues.map(value => (
                     <li className="game-screen-content__paragraph">
                        <img src={value.src} alt={value.alt} className="game-screen-content__paragraph-img" />
                        <div className="game-screen-content__paragraph-body">
                           <h3 className="game-screen-content__paragraph-body-title">
                              {value.title}
                           </h3>
                           <p className="game-screen-content__paragraph-body-subtitle">
                              {value.subtitle}
                           </p>
                        </div>
                     </li>
                  ))}
               </ul>

            </div>
         </div>
      </section>
   )
}

export default GameScreenContent