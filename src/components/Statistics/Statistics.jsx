import { Static } from './Static';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <Static static={stat} />
        ))}
      </ul>
    </section>
  );
};
