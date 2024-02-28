import { Link } from "react-router-dom"
import { resetState } from '../../../../type'

function Button({resetState}: resetState) {
   return (
      <Link className="result__button" to={'/'} onClick={resetState}>
         Попробовать еще раз
      </Link>
   )
}

export default Button