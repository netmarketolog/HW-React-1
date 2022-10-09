import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem people={friend} />
      ))}
    </ul>
  );
};
