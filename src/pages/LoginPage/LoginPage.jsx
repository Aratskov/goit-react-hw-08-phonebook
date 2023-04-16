import { Wrap } from 'components/RegistrForm/RegisterForm.styled';
import { Form, Input, Btn } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operationsAuth';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(loginUser({ email, password }));
  };

  return (
    <Wrap>
      <Form onSubmit={handlerSubmit}>
        <label>
          <Input type="text" name="email" placeholder="Email" />
        </label>
        <label>
          <Input type="text" name="password" placeholder="Password" />
        </label>
        <Btn type="submit">Login</Btn>
      </Form>
    </Wrap>
  );
};
