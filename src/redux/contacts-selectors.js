export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getfilterContacts = state => {
  const items = getItems(state);

  const filter = getFilter(state);
  if (filter.length === 0) {
    return items;
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
