import Card from "../card/Card"
import { answerValuesProps } from '../../../../../type'

function Wrapper ({answerValues}: answerValuesProps) {
   const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   };

   return (
      <div className="card__wrapper">
         {answerValues.map(value => {
            return (
               <Card background={getRandomColor()} answer={value.answer}/>
            )
         })}
      </div>
   )
}

export default Wrapper