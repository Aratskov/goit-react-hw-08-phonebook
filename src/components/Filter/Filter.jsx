import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { filters } from 'redux/contact';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerInput = event => {
    const { value } = event.target;
    dispatch(filters(value));
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
