import * as React from 'react';
import {
  Container,
  FormControl as StyledFormControl,
  Label,
  Input,
  ErrorMessage,
} from './ValidatedTextInput.styled';
import { FormControl } from '../../models';

export interface IValidatedTextInput extends FormControl {
  onChange: (event: React.ChangeEvent) => void;
}

export default function ValidatedTextInput({
  id,
  type,
  placeholder,
  value,
  error,
  onChange,
}: IValidatedTextInput) {
  return (
    <Container>
      <StyledFormControl className='form-control'>
        <Label htmlFor={id}>
          <Input
            defaultValue=''
            value={value}
            id={id}
            type={type}
            placeholder={placeholder}
            className=''
            error={error}
            onChange={onChange}
          />
        </Label>
        {error && (
          <ErrorMessage className='error-message'>{error}</ErrorMessage>
        )}
      </StyledFormControl>
    </Container>
  );
}
