import React from 'react';
// import PropTypes from 'prop-types';
import { ContactItem, ContactList, ButtonDelete } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/items/itemsSlice';
import { getfilterContacts } from 'redux/contacts-selectors';

function Contacts() {
  const dispatch = useDispatch();
  const onDelete = e => {
    dispatch(deleteContact(e.target.name));
  };
  const contacts = useSelector(getfilterContacts);

  return (
    <>
      <ContactList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {name}: {number}
              <ButtonDelete type="button" name={id} onClick={onDelete}>
                Delete
              </ButtonDelete>
            </ContactItem>
          );
        })}
      </ContactList>
    </>
  );
}
// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
export default Contacts;
