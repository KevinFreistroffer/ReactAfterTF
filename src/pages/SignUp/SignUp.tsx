import * as React from 'react';
import { Container } from './SignUp.styled';
import PageHeader from '../../components/PageHeader';
import ValidatedTextInput from '../../components/ValidatedTextInput';
import { NavigationLink } from '../../components/Header/components/Navigation/Navigation.styled';
// import {
//   FormControl as StyledFormControl,
//   ErrorMessage,
//   Label,
//   Input,
// } from '/FormControl.styled';
import { FormControl } from '../../interfaces';
import { useTranslation } from 'react-i18next';

export interface ISignUpProps {}

export const SignUp = (props: ISignUpProps) => {
  const { t } = useTranslation();
  const [formControls, updateFormControls] = React.useState<Array<FormControl>>(
    [
      {
        id: 'username',
        type: 'text',
        placeholder: t(
          'form_placeholders.Enter a username',
          'Enter a username'
        ),
        value: '',
        error: undefined,
      },
      {
        id: 'email',
        type: 'email',
        placeholder: t(
          'form_placeholders.email@example.com',
          'email@example.com'
        ),
        value: '',
        error: undefined,
      },
      {
        id: 'password',
        type: 'password',
        placeholder: t(
          'form_placeholders.Enter a password',
          'Enter a password'
        ),
        value: '',
        error: undefined,
      },
      {
        id: 'passwordConfirmation',
        type: 'password',
        placeholder: t(
          'form_placeholders.Confirm your password',
          'Confirm your password'
        ),
        value: '',
        error: undefined,
      },
    ]
  );

  const handleOnChange = (event: any, index: number) => {
    event.persist();

    const newState = formControls;
    newState[index].value = event.target.value;
    updateFormControls([...newState]);
  };

  const TextInputs = formControls.map((control: FormControl, index: number) => {
    return (
      <ValidatedTextInput
        {...control}
        onChange={(event: any) => handleOnChange(event, index)}
      />
    );
  });

  const submit = (event: any) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Container>
      <PageHeader>
        <h1>{t('Create an Account', 'Create an Account')}</h1>
      </PageHeader>
      <form>
        {TextInputs}
        <button type='submit' onClick={submit}>
          {t('Create Account', 'Create Account')}
        </button>
      </form>
    </Container>
  );
};

export default SignUp;
