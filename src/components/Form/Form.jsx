import React from 'react';
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
import styled from 'styled-components';
import { getContacts, contactsOperations } from 'redux/contacts/index';
import { useDispatch, useSelector } from 'react-redux';
import openNotificationWithIcon from 'components/Notification';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string()
    .phone('UA', 'Please enter a valid phone number')
    .required(),
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
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const isContactInList = name => {
    return !!contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
  };

  const handleSubmit = async ({ name, number }, { resetForm }) => {
    let contact = {
      name,
      number,
    };
    if (isContactInList(name)) {
      openNotificationWithIcon('warning', `${name} is already in contacts!`);
      return;
    }
    try {
      dispatch(contactsOperations.createContact(contact));
      openNotificationWithIcon(
        'success',
        `Contact with name: ${name} created!`
      );
    } catch (error) {
      openNotificationWithIcon('error', 'Error');
    }

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormContactStyled autoComplete="off">
          <FormSection>
            <label htmlFor="name">Full name</label>
            <FieldContactStyled
              name="name"
              type="text"
              placeholder="Full name"
            />
            <FormError name="name" />
          </FormSection>
          <FormSection>
            <label htmlFor="number">Number</label>
            <FieldContactStyled
              name="number"
              type="tel"
              placeholder="000-000-0000"
            />
            <FormError name="number" />
          </FormSection>

          <ButtonStyled type="submit">Add</ButtonStyled>
        </FormContactStyled>
      </Formik>
    </>
  );
};
