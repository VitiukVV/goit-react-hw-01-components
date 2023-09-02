import { styled } from 'styled-components';

export const Wraper = styled.div`
  width: 320px;
  margin: 0 auto 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: solid 1px grey;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 40px 0;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 20px 0;
`;

export const TextUserName = styled.p`
  font-size: 24px;
  margin: 0;
  margin-bottom: 15px;
  color: #000000;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  color: grey;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SpanTextSecond = styled.span`
  font-weight: 700;
`;
