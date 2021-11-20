import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

Button.propTypes = {};

export default Button;