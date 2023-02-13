import {ListContacts, ItemContact, Button, Text} from './ContactsList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';

export const ContactsList = ({findContactsByName, contacts}) => {
   
    const dispacth = useDispatch();
    let foundContacts = findContactsByName();
    let renderCondition = foundContacts.length > 0 ? (foundContacts) : (contacts);
    
    return (
        <ListContacts>
            {renderCondition.map(({id, name, number}) => {
                return (
                    <ItemContact key={id}>
                        <Text>{name}: {number}</Text> 
                        <Button type='button' onClick={() => dispacth(deleteContact(id))}>Delete</Button>
                    </ItemContact>
                )
            })}
        </ListContacts>
    )
}

ContactsList.propTypes = {
    findContactsByName: PropTypes.func,
    contacts: PropTypes.arrayOf(PropTypes.object)
}