import styles from '../comment/comment.module.scss';
import cn from 'classnames';
import ReactStars from 'react-rating-stars-component';
import React from 'react';
import PropTypes from 'prop-types';

function Comment({comment}) {
  const {id, name, benefits, flaws, total} = comment;
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
          size={25}
          value={3}
          edit={false}
          activeColor='#D12136'
          isHalf
        />
        <span>Советует</span>
      </div>
      <div className={styles.answer}>
        <span className={styles.time}>1 минуту назад</span>
        <button className={styles.reply}>Ответить</button>
      </div>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
    flaws: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
  }),
};

export default Comment;
