import { useEffect, useState } from 'react';
import { ContactForm } from './Form/Form';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Section, Title } from './App.styled';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contacts);
    return !!contacts ? parsContacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    let id = nanoid();
    let contact = {
      id,
      name,
      number,
    };
    isInListContacts(contact)
      ? alert(`${name} is already in contacts!`)
      : setContacts(prevState => [...prevState, contact]);
  };

  const isInListContacts = contact => {
    return !!contacts.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const onfilterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onContactDelete = e => {
    setContacts(prevContacts => [
      ...prevContacts.filter(c => c.id !== e.target.name),
    ]);
  };

  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={onChangeFilter}></Filter>
        {onfilterContact().length === 0 ? (
          <p>
            There is no contact
            {!!contacts.length ? ' with this name' : ''}!
          </p>
        ) : (
          <Contacts
            contacts={onfilterContact()}
            onClick={onContactDelete}
          ></Contacts>
        )}
      </Section>
    </>
  );
};
