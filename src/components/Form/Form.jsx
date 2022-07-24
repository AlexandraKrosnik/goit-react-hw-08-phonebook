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
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import {
  useCreateContactsMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';

const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  phone: Yup.string()
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
  const { data } = useFetchContactsQuery();
  const [createContacts] = useCreateContactsMutation();

  const isContactInList = name => {
    return !!data.find(c => c.name.toLowerCase() === name.toLowerCase());
  };

  const handleSubmit = async ({ name, phone }, { resetForm }) => {
    let contact = {
      name,
      phone,
    };
    if (isContactInList(name)) {
      toast.error(`${name} is already in contacts!`, {
        position: 'top-right',
      });

      return;
    }
    try {
      await createContacts(contact);
      toast.success(`Contact with name: ${name} created!`, {
        position: 'top-right',
      });
    } catch (error) {
      toast.error(`Error`, {
        position: 'top-right',
      });
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
            <label htmlFor="phone">Number</label>
            <FieldContactStyled
              name="phone"
              type="tel"
              placeholder="000-000-0000"
            />
            <FormError name="phone" />
          </FormSection>

          <ButtonStyled type="submit">Add</ButtonStyled>
        </FormContactStyled>
      </Formik>
      <Toaster />
    </>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
