import { ContactForm } from './Form/Form';
import Contacts from './Contacts/Contacts';

import { Section, Title } from './App.styled';
import Filter from './Filter/Filter';
import { getfilterContacts } from 'redux/contacts-selectors';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';

export const App = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filterContacts = useSelector(getfilterContacts)(contacts);

  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        {!!filterContacts && filterContacts.length === 0 ? (
          <p>
            There is no contact
            {!!contacts.length ? ' with this name' : ''}!
          </p>
        ) : (
          !!filterContacts && <Contacts contacts={filterContacts} />
        )}
      </Section>
    </>
  );
};
