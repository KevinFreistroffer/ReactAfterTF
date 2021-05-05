import * as React from 'react';
import { StyledRegister } from './Register.styled';
import { StyledPageHeader } from '../../styled/PageHeader.styled';
import { TextField } from '@material-ui/core';

export interface IRegisterProps {}

export const Register = (props: IRegisterProps) => {
  return (
    <StyledRegister>
      <StyledPageHeader>
        <h1>Register</h1>
      </StyledPageHeader>
    </StyledRegister>
  );
};

export default Register;
