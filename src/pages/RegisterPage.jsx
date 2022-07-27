import { Container } from 'components/Container/Container';
import { UserForm } from 'components/UserForm/UserForm';

export default function RegisterPage() {
  return (
    <Container>
      <UserForm operation={'register'} />
    </Container>
  );
}
