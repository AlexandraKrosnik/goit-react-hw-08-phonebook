import React from 'react';
// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  ErrorText,
  StyledForm,
  StyledField,
  FormSection,
  ButtonStyled,
} from './Form.styled';
import * as Yup from 'yup';
import 'yup-phone';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/items/itemsSlice';

import { getItems } from 'redux/contacts-selectors';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().phone().required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const FormContactStyled = styled(Form)`
  ${StyledForm}
`;
const FieldContactStyled = styled(Field)`
  ${StyledField}
`;

export const ContactForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const isContactInList = contact => {
    return !!items.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    let id = nanoid();
    let contact = {
      id,
      name,
      number,
    };
    if (isContactInList(contact)) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormContactStyled autoComplete="off">
        <FormSection>
          <label htmlFor="name">Full name</label>
          <FieldContactStyled name="name" type="text" placeholder="Full name" />
          <FormError name="name" />
        </FormSection>
        <FormSection>
          <label htmlFor="number">Number</label>
          <FieldContactStyled
            name="number"
            type="tel"
            placeholder="+____________"
          />
          <FormError name="number" />
        </FormSection>

        <ButtonStyled type="submit">Add</ButtonStyled>
      </FormContactStyled>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
