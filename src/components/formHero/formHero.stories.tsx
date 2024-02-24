import FormHero from './FormHero';
// import testUndraw from "../../../assets/images/undraw/test_undraw.svg";

export const FormForLogin = () => <FormHero variant="login" />;
export const FormForSignup = () => <FormHero variant="signup" />;

export default {
  component: FormHero,
  title: 'Organisms/Login form',
};
