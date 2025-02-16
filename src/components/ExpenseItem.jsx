import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(Appcontext);
 const handleDeleteExpense = () => {
dispatch({
  type:'DELETE_EXPENSE',
  payload:id
})
 }
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>
        <div className="badge badge-accent">{cost}</div>
      </td>
      <td>
        <button className="btn btn-xs btn-error" onClick={handleDeleteExpense}>
          <Trash2 />
        </button>
      </td>
    </tr>
  );
};
export default ExpenseItem;
