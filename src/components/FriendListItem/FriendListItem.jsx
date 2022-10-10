export const FriendListItem = ({ people: { avatar, name, isOnline, id } }) => {
  return (
    <>
      {isOnline ? (
        <span className="online"></span>
      ) : (
        <span className="offline"></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};
