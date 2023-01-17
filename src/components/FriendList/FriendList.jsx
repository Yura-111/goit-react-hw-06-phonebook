import { useDispatch, useSelector } from 'react-redux';

import { StyledList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import { FriendDescription } from './FriendItem.styled';
import { Button } from 'components/Button/Button';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contactList = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = filter === "" ? contactList :
  contactList.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase())
  });

  return (
    <StyledList>
      {filteredContacts.length > 0 && filteredContacts.map(({ id, name, number }) => (
        <FriendItem key={id}>
          <FriendDescription>
            {name}: {number}
          </FriendDescription>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            text="Delete"
          />
        </FriendItem>
      ))}
    </StyledList>
  );
};
