import PropTypes from 'prop-types';
import { Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ people: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
    </>
  );
};
FriendListItem.propTypes = {
  people: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
