import './gameStart.scss'
import HeaderStart from '../../local/game-start-local/header/HeaderStart'
import Wrapper from '../../local/game-start-local/content/wrapper/Wrapper'
import Footer from '../../local/game-start-local/content/footer/Footer'
import Pointer from "../../local/game-start-local/content/pointer/Pointer"
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { answersType } from '../../../type'

function GameStart() {
   const [answerValues] = useState<answersType[]>([
      {
         answer: 75,
      },
      {
         answer: 1,
      },
      {
         answer: 35,
      },
      {
         answer: 7,
      },
      {
         answer: 885,
      },
      {
         answer: 40,
      },
   ])

   return (
      <section className="game-start__page">
         <NavLink to={'/Timer'} className="game-start__container container">
            <div className="game-start_body">
               <HeaderStart answerValues={answerValues}/>
               <Wrapper answerValues={answerValues}/>
               <Pointer/>
               <Footer/>
            </div>
         </NavLink>
      </section>
   )
}

export default GameStart