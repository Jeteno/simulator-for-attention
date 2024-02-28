import {headerContentProps} from '../../../../type'

function HeaderLocal ({headerContent}: headerContentProps) {
   return (
      <header className="header__page page">
         <div className="header__container container">
            <div className="header__body">
            {headerContent.map(value => {
               return (
                  <div className="header__content">
                     <div className="header__title">
                        <h1 className="header__title-h">
                           {value.title}
                        </h1>
                     </div>
                     <div className="header__subtitle">
                        <p className="header__subtitle-p">
                           {value.subtitle}
                        </p>
                     </div>
                  </div>
               )
            })}
            </div>
         </div>
      </header>
   )
}

export default HeaderLocal