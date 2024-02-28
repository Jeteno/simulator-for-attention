import { cardProps } from '../../../../type'

function Card({background, answer, id, answerChanged, level}: cardProps) {
  const randomAnimation = Math.floor(Math.random() * 3) + 1;
  const animationClass = `animation${randomAnimation}`;

  return (
      <button className={level > 2 ? (level > 3 ? (level < 6 ? `button-card__content-more ${animationClass}` : (level < 8 ? `button-card__content-16 ${animationClass}` : `button-card__content-25 ${animationClass}`)) : `button-card__content ${animationClass}`) : "button-card__content"} style={{background}} id={id} value={answer} onClick={answerChanged}>
        {answer}
      </button>
  )
}

export default Card