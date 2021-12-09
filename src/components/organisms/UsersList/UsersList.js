import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  deleteUsers: PropTypes.func,
  users: PropTypes.shape(UserShape),
};
export default UsersList;
