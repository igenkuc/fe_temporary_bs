import { FC } from 'react';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import { SignupForm } from '../components/SignupForm/SignupForm';

export const LoginPage: FC = () => {
  return (
    <div>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    </div>
  );
};