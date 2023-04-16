import { List, Item, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contact/selectors';
import { deleteContact } from 'redux/contact/operations';

export const ContactList = () => {
  const contact = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterList = contact.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filterList.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name} :</span>
          <span>{number}</span>
          <Btn
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            {' '}
            x{' '}
          </Btn>
        </Item>
      ))}
    </List>
  );
};
