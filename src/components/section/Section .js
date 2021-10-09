import './TransactionHistory.css';
import transactions from './transactions.json';

export default function TransactionHistory(props) {
  return (
    <table className="transaction-history">
      <thead className="thead-history">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="tbodyh-history">
        {transactions.map((el, a, b) => (
          <tr key={el.id} className="color">
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
