import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { filter } from 'redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerInput = event => {
    const { value } = event.target;
    dispatch(filter(value));
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Find contacts by name"
        onChange={handlerInput}
      />
    </>
  );
};
