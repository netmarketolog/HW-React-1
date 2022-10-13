import PropTypes from 'prop-types';
import { Transaction } from '../Transaction/Transaction';
import { List, Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactionsMarkup }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionsMarkup.map(transaction => (
          <List key={transaction.id}>
            <Transaction item={transaction} />
          </List>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  transactionsMarkup: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
