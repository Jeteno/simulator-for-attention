import './gamePage.scss'
import Header from '../../local/game-page-local/header/Header'
import List from '../../local/game-page-local/list/List'
import MenuGame from '../../local/game-page-local/menu-game/MenuGame'
import { useState } from 'react'
import { statisticsProps, answersValuesType } from '../../../type'

function GamePage({level, setLevel, bonus, setBonus, glasses, setGlasses, resultAnswersRight, setResultAnswersRight, resultAnswersAll, setResultAnswersAll}: statisticsProps) {
   const getRandomAnswer = () => {
      let randomAnswer = 0;
      for (let i = 0; i < 50; i++) {
         randomAnswer += Math.floor(Math.random() * 13);
      }
      return randomAnswer
   }

   const getIdAnswer = () => {
      let timestap = 0;
      let numberrandom = 0;
      for (let i = 0; i < 50; i++) {
         timestap += Date.now();
         numberrandom += Math.floor(Math.random() * 10000);
      }
      return `${timestap}_${numberrandom}`;
   }

   const [answerValuesRandom, setAnswerValuesRandom] = useState<answersValuesType[]>([
      {
         id: getIdAnswer(),
         answer: getRandomAnswer(),
      },
      {
         id: getIdAnswer(),
         answer: getRandomAnswer(),
      },
      {
         id: getIdAnswer(),
         answer: getRandomAnswer(),
      },
      {
         id: getIdAnswer(),
         answer: getRandomAnswer(),
      },
      {
         id: getIdAnswer(),
         answer: getRandomAnswer(),
      },
      {
         id: getIdAnswer(),
         answer: getRandomAnswer(),
      },
   ])

   const desiredOption = answerValuesRandom[Math.floor(Math.random() * answerValuesRandom.length)]

   const generateNewAnswers = () => {
      let newAnswers = [];
      const numberOfAnswers: number = level === 3 ? 6 : level === 5 ? 4 : level === 7 ? 9 : 12;

      for (let i = 0; i < numberOfAnswers; i++) {
         newAnswers.push({ id: getIdAnswer(), answer: getRandomAnswer() });
      }
      return newAnswers;
   };

   function answerChanged(event: React.MouseEvent<HTMLButtonElement>) {
      const value = event.currentTarget.value;
   
      if(Number(value) === desiredOption.answer) {
         levelChange(true)
         bonusChange(true)
         glassesChange(true)
         console.log(resultAnswersRight)
         if (level === 3) {
            setAnswerValuesRandom(prevValues => [...prevValues, ...generateNewAnswers().slice(0, 6)]);
         } else if (level === 5) {
            setAnswerValuesRandom(prevValues => [...prevValues, ...generateNewAnswers()]);
         } else if (level === 7) {
            setAnswerValuesRandom(prevValues => [...prevValues, ...generateNewAnswers()]);
         }

         if (typeof resultAnswersRight !== "undefined") {
            updateResultAnswersRight(resultAnswersRight);
         }
         if (typeof resultAnswersAll !== "undefined") {
            updateResultAnswersAll(resultAnswersAll)
         }

      } else if (Number(value) !== desiredOption.answer) {
         levelChange(false)
         bonusChange(false)
         glassesChange(false)

         if (level === 4) {
            setAnswerValuesRandom(answerValuesRandom.slice(-6))
         } else if (level === 6) {
            setAnswerValuesRandom(answerValuesRandom.slice(-12))
         } else if (level === 8) {
            setAnswerValuesRandom(answerValuesRandom.slice(-16))
         }

         if (typeof resultAnswersAll !== "undefined") {
            updateResultAnswersAll(resultAnswersAll)
         }
      }
   }

   function updateResultAnswersRight(result: number) {
      if (setResultAnswersRight) {
        if (typeof resultAnswersRight === 'number') {
          setResultAnswersRight(result + 1);
        }
      }
    }

   function updateResultAnswersAll (result: number) {
      if(setResultAnswersAll) {
         if(typeof resultAnswersAll === 'number') {
            setResultAnswersAll(result + 1)
         }
      }
   }

   function levelChange(result: boolean) {
      if (result === true && level && level < 9) {
         if(setLevel) {
            setLevel((prevLevel) => prevLevel + 1);
         }
      } else if (result === false && level && level > 1) {
         if (setLevel) {
            setLevel((prevLevel) => prevLevel - 1);
         }
      }

      return level;
   }

   function bonusChange(result: boolean) {
      if (result === true && bonus && bonus < 5) {
         if (setBonus) {
            setBonus((prevBonus) => prevBonus + 1);
         }
      } else if (result === false && bonus && bonus > 1) {
         if(setBonus) {
            setBonus((prevBonus) => prevBonus - 1);
         }
      }  

      return bonus;
   }

   function glassesChange(result: boolean) {
      if(result === true && level === 1) {
         if(setGlasses) {
            setGlasses(42)
         }
      } else if (result === true && level && level > 1) {
         if(setGlasses && bonus) {
            setGlasses((prevGlasses) => Math.floor(prevGlasses + 42 * bonus))
         }
      } else if (result === false) {
         return glasses
      }

      return glasses
   }

   return (
      <section className="game__page">
         <div className="game__container container">
            <div className="game__body">
               <Header desiredOption={desiredOption}/>
               <MenuGame level={level} bonus={bonus} glasses={glasses}/>
               <List answerValuesRandom={answerValuesRandom} answerChanged={answerChanged} level={level}/>
            </div>
         </div>
      </section>
   )
}

export default GamePage

