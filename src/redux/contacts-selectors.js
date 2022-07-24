export const getFilter = state => state.filter;

export const getfilterContacts = state => {
  const filter = getFilter(state);
  return function (contacts) {
    if (filter.length === 0) {
      return contacts;
    }
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
};
