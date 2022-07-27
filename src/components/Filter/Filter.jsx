import React from 'react';
// import PropTypes from 'prop-types';
import { InputStyled, Title } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/contacts/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <Title>Find contacts by name</Title>
      <InputStyled
        type="text"
        onChange={({ target }) => dispatch(onChangeFilter(target.value))}
        value={filter}
      />
    </>
  );
}

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,

//   value: PropTypes.string.isRequired,
// };
