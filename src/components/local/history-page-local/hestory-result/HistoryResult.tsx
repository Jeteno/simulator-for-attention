import { statisticsProps } from '../../../../type';
import { useState, useEffect } from 'react';

function HistoryResult({data}: statisticsProps) {
   const [newData, setNewData] = useState(data);

   useEffect(() => {
      const storedData = data;
      if (storedData) {
         storedData.sort((a, b) => b.glasses - a.glasses);
         setNewData(storedData.slice(0, 5));   
      }
    }, [data]);

   return (
      <>
      <div className="history-result__title">
         <h2 className="history-result__title-h">
            5 лучших результатов
         </h2>
      </div>
      <table className="hestory-result__body">
         <tbody>
            {newData ? (
               newData.map((item, index) => (
                  <tr className="hestory-result__table-row" key={index}>
                     <td className="hestory-result__table-cell">
                        #{index + 1}
                     </td>
                     <td className="hestory-result__table-cell">
                        {item.date}
                     </td>
                     <td className="hestory-result__table-cell">
                        {item.glasses}
                     </td>
                  </tr>
               ))
            ) : null}
         </tbody>
      </table>
      </>
   )
}

export default HistoryResult