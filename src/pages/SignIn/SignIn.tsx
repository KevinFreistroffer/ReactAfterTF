import * as React from 'react';
import { Container, FormContainer, Title } from './SignIn.styled';
import PageHeader from '../../components/PageHeader';
import ValidatedTextInput from '../../components/ValidatedTextInput';
import { FormControl } from '../../interfaces';
import { useTranslation } from 'react-i18next';
import { NavigationLink } from '../../components/Header/components/Navigation/Navigation.styled';

export interface ISignInProps {}

export const SignIn = (props: ISignInProps) => {
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
  const [formIsSubmitted, setFormIsSubmitted] = React.useState<boolean>();

  const handleOnChange = (event: any, index: number) => {
    event.persist();

    const newState = formControls;
    newState[index].value = event.target.value;
    updateFormControls([...newState]);
  };

  const handleOnBlur = (event: any, index: number) => {
    const inputId = event.target.id;
    validate(inputId, event.target.value);
  };

  const validate = (inputId: string, value: string) => {
    let newState = formControls;
    let index = formControls.findIndex((f) => f.id === inputId);
    switch (inputId) {
      case 'username':
        if (value.trim() !== '') {
          newState[index].error = undefined;
        } else {
          newState[index].error = 'Username is required';
        }

        break;
      case 'email':
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value
          )
        ) {
          newState[index].error = undefined;
        } else {
          newState[index].error = 'Enter a valid email address';
        }
        break;
      case 'password':
        if (value.trim() !== '') {
          newState[index].error = undefined;
        } else {
          newState[index].error = 'Password is required';
        }
        break;
      case 'passwordConfirmation':
        const password = formControls.find((f) => f.id === 'password');

        if (password?.value === value) {
          newState[index].error = undefined;
        } else if (password?.value !== newState[index].value) {
          newState[index].error = 'Passwords must match';
        }
        break;
      default:
        break;
    }

    updateFormControls([...newState]);
  };

  const TextInputs = formControls.map((control: FormControl, index: number) => {
    return (
      <ValidatedTextInput
        {...control}
        onChange={(event: any) => handleOnChange(event, index)}
        onBlur={(event: any) => handleOnBlur(event, index)}
      />
    );
  });


  const submit = (event: any) => {
    event.preventDefault();
    setFormIsSubmitted(true);
  };

  return (
    <Container>
      <FormContainer>
        <PageHeader>
          <Title className='flex-column'>
            {t('Log in', 'Log in')}&nbsp;
            <span>
              or{' '}
              <NavigationLink to='/sign-up'>
                {t('Create an Account', 'Create an Account')}
              </NavigationLink>
            </span>
          </Title>
        </PageHeader>
        <form>
          {TextInputs}
          <button type='submit' onClick={submit}>
            {t('Log in', 'Log in')}
          </button>
          <NavigationLink to='forgot-password'>
            {t('Forgot password', 'Forgot password')}?
          </NavigationLink>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
