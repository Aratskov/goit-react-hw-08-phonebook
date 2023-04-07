import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, ContainerWrap } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contact.contacts);
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
      </Container>
    </ContainerWrap>
  );
};
