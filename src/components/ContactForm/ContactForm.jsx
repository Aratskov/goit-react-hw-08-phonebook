import { Form, Input, Btn } from './ContactForm.styled';
import { add } from 'redux/contact';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [state, setState] = useState('');
  const changeName = useSelector(state => state.contact.contacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();

    changeName.some(
      ({ name }) => name.toLowerCase() === state.name.toLowerCase()
    )
      ? alert(`${state.name} is already in contacts!`)
      : dispatch(add({ ...state, id: nanoid() }));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        name="number"
        placeholder="Phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        required
      />
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};
