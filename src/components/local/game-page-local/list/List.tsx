import Card from "../card/Card"
// import {answersValuesType} from '../../../global/game-page/GamePage'
import { answerRenderingProps } from '../../../../type'

function Wrapper ({answerValuesRandom, answerChanged, level}: answerRenderingProps) {
   const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   };

   return (
      <div className="card__list" style={{gap: level > 7 ? "10px": "innerhit"}}>
         {answerValuesRandom.map(value => {
            return (
               <Card background={getRandomColor()} answer={value.answer} id={value.id} answerChanged={answerChanged} level={level}/>
            )
         })}
      </div>
   )
}

export default Wrapper