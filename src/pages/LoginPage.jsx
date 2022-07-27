import { Container } from 'components/Container/Container';
import { UserForm } from 'components/UserForm/UserForm';

export default function LoginPage() {
  return (
    <Container>
      <UserForm operation={'login'} />
    </Container>
  );
}
