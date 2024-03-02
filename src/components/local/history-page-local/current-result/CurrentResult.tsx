import { statisticsProps } from '../../../../type'

function CurrentResult({glasses}: statisticsProps) {
   return (
      <table className="current-result__table">
         <tr className="current-result__table-row">
            <td className="current-result__table-cell">
               Текущий результат
            </td>
            <td className="current-result__table-cell">
               {glasses}
            </td>
         </tr>
      </table>
   )
}

export default CurrentResult