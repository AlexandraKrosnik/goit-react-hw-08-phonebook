import React from 'react';
import PropTypes from 'prop-types';
import { ContactList } from './Contacts.styled';

import { ContactItem } from './ContactItem/ContactItem';

function Contacts({ contacts }) {
  return (
    <>
      <ContactList>
        {!!contacts &&
          contacts.map(({ id, name, phone }) => {
            return <ContactItem key={id} id={id} name={name} phone={phone} />;
          })}
      </ContactList>
    </>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Contacts;
