import { styled } from 'styled-components';

export const Wraper = styled.section`
  width: 320px;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: solid 1px grey;
`;

export const StatsTitle = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const StatsItem = styled.li`
  display: flex;
  padding: 10px;
  text-align: center;
  flex-direction: column;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percent = styled.span`
  font-weight: 700;
  font-size: 22px;
`;
