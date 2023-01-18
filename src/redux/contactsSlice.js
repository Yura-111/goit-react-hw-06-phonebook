import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
        const isContact = state.contacts.find(contact => (
            contact.name === action.payload.name ||
            contact.number === action.payload.number
            ));
        
        if (isContact) {
            toast.warning("There is already a contact or a number")
            return;
        }
        return {
            contacts: [...state.contacts, action.payload]
        }
    },

    deleteContact(state, action) {
        return {
            contacts: state.contacts.filter(contact => contact.id !== action.payload.id)
        }
    }


    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
