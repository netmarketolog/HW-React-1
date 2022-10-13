import { Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ people: { avatar, name, isOnline } }) => {
  return (
    <>
      {/* {isOnline ? (
        <span className="online"></span>
      ) : (
        <span className="offline"></span>
      )} */}
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
    </>
  );
};
