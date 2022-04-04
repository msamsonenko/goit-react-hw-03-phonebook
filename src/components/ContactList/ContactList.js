import {
  ContactListContainer,
  ContactListItem,
  ContactListBtn,
  ContactListName,
  ContactListNumber,
} from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListContainer>
      {contacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            <ContactListName>{contact.name}</ContactListName>
            <ContactListNumber>{contact.number}</ContactListNumber>
            <ContactListBtn
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </ContactListBtn>
          </ContactListItem>
        );
      })}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
