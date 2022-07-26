import React from 'react';
import PropTypes from 'prop-types';
import { ContactList } from './Contacts.styled';

import { ContactItem } from './ContactItem/ContactItem';

function Contacts({ contacts }) {
  return (
    <>
      <ContactList>
        {!!contacts &&
          contacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
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
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Contacts;
