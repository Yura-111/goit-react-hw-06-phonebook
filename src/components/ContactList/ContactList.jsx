import { ListItem, ButtonDelete, TextContact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter);
  

    const filterContacts = () => {
      const normalizedFilter = filterValue.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

    const Contacts = filterContacts();
    
    
     return (
       <ul>
         {Contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <TextContact>{name}: {number}</TextContact>
            <ButtonDelete type="button" onClick={() => dispatch(deleteContact({id}))}>Delete</ButtonDelete>
          </ListItem>
        )
       })}
       </ul>
    );
   }

export default ContactList;
