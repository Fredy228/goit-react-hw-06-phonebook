import {Container, Title} from './App.styled';
import {Phonebook} from '../Phonebook/Phonebook';
import {Filter} from '../Filter/Filter';
import {ContactsList} from '../ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux'
import { addNewContact } from '../../redux/slice'

export const App = () => {
  
  const dispacth = useDispatch()
  const contacts = useSelector((state) => state.contacts.value);
  const filter = useSelector((state) => state.filter.value);

  const addContact = (name, number) => {
    const haveContact = contacts.find( contact => contact.name === name || contact.number === number);
    if(haveContact) {
      alert(`${haveContact.name} is already in contacts`)
    } else {
      const newContacts = {
        id: nanoid(),
        name,
        number
      };
      dispacth(addNewContact(newContacts));
    }
  }

  const findContactsByName = () => {
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }
  
    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook addContact={addContact}/>
        <Title>Contacts</Title>
        <Filter/>
        <ContactsList 
        findContactsByName={findContactsByName}
        contacts={contacts}/>
      </Container>
    )
  }
