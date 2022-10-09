import { Profile } from './Profile/Profile';
import user from 'components/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'components/data.json';

export const App = () => {
  return (
    <div>
      <Profile profile={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
