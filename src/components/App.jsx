import { ContactPage } from 'pages/ContactPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
