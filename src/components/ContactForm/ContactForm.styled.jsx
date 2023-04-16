import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 250px;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f2f2f2;
`;

export const Btn = styled.button`
  min-width: 215px;
  padding: 10px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;
