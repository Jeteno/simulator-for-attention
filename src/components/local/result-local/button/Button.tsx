import { Link } from "react-router-dom"
import { statisticsProps } from '../../../../type'

function Button({saveData}: statisticsProps) {
   return (
      <Link className="game-screen-content__link" to={'/History'} onClick={saveData}>
         Далее
      </Link>
   )
}

export default Button