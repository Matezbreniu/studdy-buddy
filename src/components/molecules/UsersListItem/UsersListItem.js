import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledSection, StyledParagraph } from './UsersListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledSection>
        <StyledParagraph bold large>
          {name}
        </StyledParagraph>
        <StyledParagraph>attendance: {attendance}</StyledParagraph>
      </StyledSection>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};
UsersListItem.propTypes = {
  deleteUser: PropTypes.func,
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
