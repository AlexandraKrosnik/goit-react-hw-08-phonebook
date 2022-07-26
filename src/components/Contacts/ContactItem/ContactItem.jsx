import { Item, ButtonDelete } from './ContactItem.styled';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  // const [deleteContact, { isLoading }] = useDeleteContactsMutation();

  return (
    <Item>
      {name}: {number}
      <ButtonDelete
        type="button"
        name={id}
        onClick={async () => {
          try {
            dispatch(contactsOperations.deleteContact(id));
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
        Delete
        {/* {isLoading ? 'Deleting...' : 'Delete'} */}
      </ButtonDelete>
    </Item>
  );
};
