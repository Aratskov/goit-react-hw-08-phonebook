import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, ContainerWrap } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  return (
    <ContainerWrap>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length === 0 || (
          <>
            <h2>Contacts</h2>
            <Filter />
          </>
        )}

        <ContactList />
        {isLoading && !error && <Loader />}
      </Container>
    </ContainerWrap>
  );
};
