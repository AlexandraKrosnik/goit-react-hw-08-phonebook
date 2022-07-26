import { Container } from 'components/Container/Container';
import { UserForm } from 'components/UserForm/UserForm';

export const RegisterPage = () => {
  return (
    <Container>
      <UserForm operation={'register'} />
    </Container>
  );
};
