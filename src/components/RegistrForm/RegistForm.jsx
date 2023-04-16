import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operationsAuth';
import { Form, Input, Btn } from 'components/ContactForm/ContactForm.styled';
import { Wrap } from './RegisterForm.styled';

export const RegisterForm = ({ btnSubmit }) => {
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(formData));
  };

  return (
    <Wrap>
      <Form onSubmit={handlerSubmit}>
        <label>
          <Input type="text" name="name" placeholder="Username" />
        </label>
        <label>
          <Input type="text" name="email" placeholder="Email" />
        </label>
        <label>
          <Input type="password" name="password" placeholder="Password" />
        </label>
        <Btn type="submit">{btnSubmit}</Btn>
      </Form>
    </Wrap>
  );
};
