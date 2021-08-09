import styles from './review.module.scss';
import cn from 'classnames';
import ReactStars from 'react-rating-stars-component';
import React from 'react';
import PropTypes from 'prop-types';

const RATING_SIZE = 25;
const AVERAGE_RATING = 3;

function Review({review}) {
  const {id, name, good, bad, comment, rating} = review;
  return (
    <li className={styles.inner}>
      <p className={styles.user} id={id}>{name}</p>
      <div className={cn(styles.opinion, styles.opinion_good)}>
        <span className={styles.label}>Достоинства</span>
        <span>{good}</span>
      </div>
      <div className={cn(styles.opinion, styles.opinion_bad)}>
        <span className={styles.label}>Недостатки</span>
        <span>{bad}</span>
      </div>
      <div className={cn(styles.opinion, styles.opinion_text)}>
        <span className={styles.label}>Комментарий</span>
        <span>{comment}</span>
      </div>
      <div className={styles.rating}>
        <ReactStars
          classNames={styles.stars}
          size={RATING_SIZE}
          value={Number(rating)}
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
    id: PropTypes.node,
    name: PropTypes.string.isRequired,
    good: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default Review;