import { Form, Input, Btn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contact/selectors';
import { addContact } from 'redux/contact/operations';
import { Wrap } from 'components/RegistrForm/RegisterForm.styled';

export const ContactForm = () => {
  const changeName = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;

    changeName.some(el => el.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts!`)
      : dispatch(addContact({ name, number }));
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Wrap style={{ padding: 0 }}>
        <Form onSubmit={onSubmit}>
          <label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <Input
              type="tel"
              name="number"
              placeholder="Phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Btn type="submit">Add contact</Btn>
        </Form>
      </Wrap>
    </>
  );
};
