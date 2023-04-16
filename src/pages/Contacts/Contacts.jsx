import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading, getContacts } from 'redux/contact/selectors';
import { fetchContacts } from 'redux/contact/operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  return (
    <Container>
      <>
        <ContactForm />
        {contacts.length === 0 || (
          <>
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter />
          </>
        )}

        <ContactList />
        {isLoading && !error && <Loader />}
      </>
    </Container>
  );
};
