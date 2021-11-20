import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledAverage, StyledSection, StyledParagraph } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledSection>
      <StyledParagraph bold large>
        {name}
      </StyledParagraph>
      <StyledParagraph>attendance: {attendance}</StyledParagraph>
    </StyledSection>
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
