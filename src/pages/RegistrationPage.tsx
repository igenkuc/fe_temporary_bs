import AuthLayout from '../components/AuthLayout/AuthLayout';
import SignupForm from '../components/SignupForm/SignupForm';

export default function RegistrationPage() {
  return (
    <div>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    </div>
  );
}
