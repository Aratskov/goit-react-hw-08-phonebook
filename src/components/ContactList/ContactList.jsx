import { List, Item, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contact';

export const ContactList = () => {
  const contact = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.contact.filter);
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
              dispatch(remove(id));
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
