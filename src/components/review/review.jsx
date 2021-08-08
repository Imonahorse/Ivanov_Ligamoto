import styles from './review.module.scss';
import cn from 'classnames';
import ReactStars from 'react-rating-stars-component';
import React from 'react';
import PropTypes from 'prop-types';

const RATING_SIZE = 25;
const AVERAGE_RATING = 3;

function Review({review}) {
  const {id, name, benefits, flaws, total, rating} = review;
  return (
    <li className={styles.inner}>
      <p className={styles.user} id={id}>{name}</p>
      <div className={cn(styles.opinion, styles.opinionGood)}>
        <span className={styles.label}>Достоинства</span>
        <span>{benefits}</span>
      </div>
      <div className={cn(styles.opinion, styles.opinionBad)}>
        <span className={styles.label}>Недостатки</span>
        <span>{flaws}</span>
      </div>
      <div className={cn(styles.opinion, styles.opinionText)}>
        <span className={styles.label}>Комментарий</span>
        <span>{total}</span>
      </div>
      <div className={styles.rating}>
        <ReactStars
          classNames={styles.stars}
          size={RATING_SIZE}
          value={rating}
          edit={false}
          activeColor='#D12136'
          isHalf
        />
        <span>{rating >= AVERAGE_RATING ? 'Советует' : 'Не советует'}</span>
      </div>
      <div className={styles.answer}>
        <time dateTime={new Date()} className={styles.time}>1 минуту назад</time>
        <button className={styles.reply} type='button'>Ответить</button>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
    flaws: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }),
};

export default Review;
