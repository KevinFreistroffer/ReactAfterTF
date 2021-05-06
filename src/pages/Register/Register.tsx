import * as React from 'react';
import { Container } from './Register.styled';
import PageHeader from '../../components/PageHeader';
import ValidatedTextInput from '../../components/ValidatedTextInput';
// import {
//   FormControl as StyledFormControl,
//   ErrorMessage,
//   Label,
//   Input,
// } from '/FormControl.styled';
import { FormControl } from '../../models';

export interface IRegisterProps {}

export const Register = (props: IRegisterProps) => {
  const [formControls, updateFormControls] = React.useState<Array<FormControl>>(
    [
      {
        id: 'username',
        type: 'text',
        placeholder: 'Enter a username',
        value: '',
        error: undefined,
      },
      {
        id: 'email',
        type: 'email',
        placeholder: 'email@example.com',
        value: '',
        error: undefined,
      },
      {
        id: 'password',
        type: 'password',
        placeholder: 'Enter a password',
        value: '',
        error: undefined,
      },
      {
        id: 'passwordConfirmation',
        type: 'password',
        placeholder: 'Confirm the password',
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

  const formContent = formControls.map(
    (control: FormControl, index: number) => {
      return (
        <ValidatedTextInput
          {...control}
          onChange={(event: any) => handleOnChange(event, index)}
        />
      );
    }
  );

  return (
    <Container>
      <PageHeader>
        <h1>Register</h1>
      </PageHeader>
      <form>{formContent}</form>
    </Container>
  );
};

export default Register;
