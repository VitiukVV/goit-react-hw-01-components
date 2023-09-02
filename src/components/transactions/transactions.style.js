import { styled } from 'styled-components';

export const Wraper = styled.table`
  width: 400px;
  margin: 30px auto;
  align-items: center;
  padding: 15px;
`;

export const TitleTransaction = styled.th`
  padding: 15px;
  text-align: center;
  background-color: #64919b;
  color: #fff;
  font-weight: 400;
`;

export const SecondText = styled.td`
  color: #000;
  text-align: start;
  padding: 15px;
  font-weight: 400;
`;

export const TransactionsLine = styled.tbody`
  tr:nth-child(2n) {
    background: grey;
  }
`;
