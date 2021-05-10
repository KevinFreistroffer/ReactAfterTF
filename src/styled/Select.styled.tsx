import styled from 'styled-components/macro';
import {
  Select as MatSelect,
  InputLabel as MatInputLabel,
} from '@material-ui/core';

export const Select = styled(MatSelect)`
  padding-left: 0.5rem;
  font-size: 0.75rem;

  .MuiSelect-root,
  .MuiSelect-outlined {
    padding: 0.5rem 2rem 0.5rem 0.5rem;
  }

  .MuiSelect-select:focus {
    background-color: transparent;
  }
`;

export const Option = styled.option`
  padding: 0.5rem;
  font-size: 0.75rem;

  &:hover {
    cursor: pointer;
  }
`;

export const InputLabel = styled(MatInputLabel)`
  margin-bottom: 1rem;
`;
