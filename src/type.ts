export type answersValuesType = {
   id: string,
   answer: number,
}

export type statisticsProps = {
   level?: number;
   setLevel?: React.Dispatch<React.SetStateAction<number>>,
   bonus?: number,
   setBonus?: React.Dispatch<React.SetStateAction<number>>,
   glasses?: number,
   setGlasses?: React.Dispatch<React.SetStateAction<number>>,
   resultAnswersRight?: number,
   setResultAnswersRight?: React.Dispatch<React.SetStateAction<number>>,
   resultAnswersAll?: number,
   setResultAnswersAll?: React.Dispatch<React.SetStateAction<number>>,
   accuracyAnswers?: number,
   setAccuracyAnswers?: React.Dispatch<React.SetStateAction<number>>,
   resetState?: React.MouseEventHandler<HTMLAnchorElement>,
 }

export type headerContentType = {
   title: string,
   subtitle?: string,
}

export type headerContentProps = {
   headerContent: headerContentType[]
}

export type answersType = {
   answer: number,
}

export type cardProps = {
   background: string,
   answer: number,
   id?: string,
   answerChanged?: React.MouseEventHandler<HTMLButtonElement>,
   level?: number,
}

export type desiredOptionProps = {
   desiredOption: answersValuesType,
}

export type answerRenderingProps = {
   answerValuesRandom?: answersValuesType[],
   answerChanged?: React.MouseEventHandler<HTMLButtonElement>,
   level?: number,
   isUpdated?: boolean,
}

export type listValuesType = {
   title: string;
   subtitle: string;
   src: string;
   alt: string;
}

export type answerValuesProps = {
   answerValues: answersType[],
}

export type footerType = {
   title: string,
   path: string,
}

export type footerTypeProps = {
   footerContentBtn: footerType[],
}

// export type resetStateProps = {
//    resetState: React.MouseEventHandler<HTMLButtonElement>
// }