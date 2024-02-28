import { cardProps } from '../../../../../type'

function Card({background, answer}: cardProps) {
   return (
      <button className="button-card__content" style={{background}}>
         {answer}
      </button>
   )
}

export default Card