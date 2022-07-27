import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import PropTypes from 'prop-types';
import { Avatar, List, Tooltip, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={<a href="https://ant.design">{name}</a>}
        description={number}
      />
      <Tooltip title="search">
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        />
      </Tooltip>
    </List.Item>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
