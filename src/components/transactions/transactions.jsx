import PropTypes from 'prop-types';
import {
  SecondText,
  TitleTransaction,
  TransactionsLine,
  Wraper,
} from './transactions.style';

export const TransactionsHistory = ({ items }) => {
  return (
    <Wraper>
      <thead>
        <tr>
          <TitleTransaction>Type</TitleTransaction>
          <TitleTransaction>Amount</TitleTransaction>
          <TitleTransaction>Currency</TitleTransaction>
        </tr>
      </thead>

      <TransactionsLine>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <SecondText>{type}</SecondText>
            <SecondText>{amount}</SecondText>
            <SecondText>{currency}</SecondText>
          </tr>
        ))}
      </TransactionsLine>
    </Wraper>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
