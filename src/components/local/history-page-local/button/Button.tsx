import { Link } from "react-router-dom"
import { statisticsProps } from '../../../../type'

function Button({resetState}: statisticsProps) {
   return (
      <Link className="result__button" to={'/'} onClick={resetState}>
         Попробовать ещё раз
      </Link>
   )
}

export default Button