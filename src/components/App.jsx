import { ContactForm } from './Form/Form';
import Contacts from './Contacts/Contacts';

import { Section, Title } from './App.styled';
import Filter from './Filter/Filter';
import {
  getfilterContacts,
  getFilter,
  getItems,
} from 'redux/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getItems);
  const filterContacts = useSelector(getfilterContacts);
  // const [contacts, setContacts] = useState(
  //   []
  //   // () => {
  //   // const contacts = localStorage.getItem('contacts');
  //   // const parsContacts = JSON.parse(contacts);
  //   // return !!contacts ? parsContacts : [];
  //   // }
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  //

  //

  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        {filterContacts.length === 0 ? (
          <p>
            There is no contact
            {!!contacts.length ? ' with this name' : ''}!
          </p>
        ) : (
          <Contacts />
        )}
      </Section>
    </>
  );
};
