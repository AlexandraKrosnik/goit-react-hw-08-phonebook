import { useDeleteContactsMutation } from 'redux/contacts/contactsApi';
import { Item, ButtonDelete } from './ContactItem.styled';
import toast from 'react-hot-toast';
export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();
  return (
    <Item>
      {name}: {phone}
      <ButtonDelete
        type="button"
        name={id}
        onClick={async () => {
          try {
            await deleteContact(id);
            toast.success('Contact deleted successfully!', {
              position: 'top-right',
            });
          } catch (error) {
            toast.error('Сontact cannot be deleted!', {
              position: 'top-right',
            });
          }
        }}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </ButtonDelete>
    </Item>
  );
};
