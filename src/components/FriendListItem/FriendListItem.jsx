export const FriendListItem = ({ people: { avatar, name, isOnline, id } }) => {
  return (
    <li class="item" key={id}>
      {isOnline ? <span class="online"></span> : <span class="offline"></span>}
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
