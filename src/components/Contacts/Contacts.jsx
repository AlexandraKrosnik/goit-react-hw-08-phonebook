import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { ContactList } from './Contacts.styled';

import { ContactItem } from './ContactItem/ContactItem';

function Contacts({ contacts }) {
  return (
    <>
      <ContactList>
        {!!contacts && (
          <List
            itemLayout="horizontal"
            dataSource={contacts}
            renderItem={contact => (
              <ContactItem key={contact.id} contact={contact} />
            )}
          />
        )}
      </ContactList>
    </>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Contacts;
