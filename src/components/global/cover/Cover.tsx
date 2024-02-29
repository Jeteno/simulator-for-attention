import '../cover/cover.scss'
import HeaderLocal from '../../local/cover-local/header/HeaderLocal'
import GameScreenContent from '../../local/game-screen-content/GameScreenContent'
import Footer from '../../local/cover-local/footer/Footer'
import { useState } from 'react'
import { headerContentType } from '../../../type'

function Cover () {
   const [headerContent] = useState<headerContentType[]>([{
      title: 'Найдите число',
      subtitle: 'Тренажер на внимание'
   }])

   return (
      <div className="cover__page">
         <HeaderLocal headerContent={headerContent}/>
         <GameScreenContent/>
         <Footer/>
      </div>
   )
}

export default Cover