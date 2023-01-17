import Box from "./utils/Box";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    
  return (
    <Box
    maxWidth="1000px" my={0} mx="auto" px={4}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      <ContactList />
      <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
      />
    </Box>)
  };

