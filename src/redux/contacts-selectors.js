export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const filterContacts = () => {
  const items = getItems();
  const filter = getFilter();
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const isContactInList = contact => {
  const items = getItems();
  return !!items.find(c => c.name.toLowerCase() === contact.name.toLowerCase());
};
