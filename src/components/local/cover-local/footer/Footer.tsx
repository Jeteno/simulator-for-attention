import { Link } from "react-router-dom"

function Footer() {
   return (
      <Link className="game-screen-content__link" to={'/Game_Start'}>
         Далее
      </Link>
   )
}

export default Footer