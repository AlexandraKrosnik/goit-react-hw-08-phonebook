import { ContactForm } from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';

import { Section, Title } from 'components/App.styled';
import Filter from 'components/Filter/Filter';
import { getFilterContacts } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';

export default function ContactPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterContacts = useSelector(getFilterContacts);

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
            {!!filterContacts.length ? ' with this name' : ''}!
          </p>
        ) : (
          !!filterContacts && <Contacts contacts={filterContacts} />
        )}
      </Section>
    </>
  );
}
