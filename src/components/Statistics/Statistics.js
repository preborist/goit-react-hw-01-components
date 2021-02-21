import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.stat__list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={styles.item}
          style={{ backgroundColor: rundomColorGenerator() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function rundomColorGenerator() {
  let rgbColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
    Math.random() * 256
  })`;
  return rgbColor;
}

export default Statistics;
