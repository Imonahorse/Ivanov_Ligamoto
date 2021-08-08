import React, {useState} from 'react';
import styles from './modal.module.scss';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import addReview from '../../store/actions';

const Stars = {
  SIZE: 36,
  COUNT: 5,
};

const initialState = {
  id: Math.random().toFixed(4),
  name: '',
  benefits: '',
  flaws: '',
  total: '',
  rating: '0',
};

function Modal({modalState, handleModalState}) {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const modalClass = cn(styles.modal, modalState && styles.modalOpen);
  const innerClass = cn(styles.inner, modalState && styles.innerOpen);
  const handleInputClick = (evt) => {
    const {name, value} = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleRatingClick = (value) => {
    setData({
      ...data,
      rating: value,
    });
  };
  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    dispatch(addReview(data));
    setData(initialState);
    handleModalState();
  };

  return (
    <section
      className={modalClass}
      onClick={handleModalState}
    >
      <div
        className={innerClass}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Оставить отзыв</h2>
          <button
            className={styles.close}
            type='button'
            onClick={handleModalState}
          >
          </button>
        </div>
        <form action="#" onSubmit={handleSubmitClick}>
          <div className={styles.form}>
            <label className={cn(styles.label, styles.labelName)}>
              <span className='visually-hidden'>Ваше имя</span>
              <input
                className={styles.input}
                name='name'
                type="text"
                value={data.name}
                onChange={handleInputClick}
              />
            </label>
            <label className={cn(styles.label, styles.labelGood)}>
              <span className='visually-hidden'>Достоинства</span>
              <input
                className={styles.input}
                name='benefits'
                type="text"
                value={data.benefits}
                onChange={handleInputClick}
              />
            </label>
            <label className={cn(styles.label, styles.labelBad)}>
              <span className='visually-hidden'>Недостатки</span>
              <input
                className={styles.input}
                name='flaws'
                type="text"
                value={data.flaws}
                onChange={handleInputClick}
              />
            </label>
            <div className={styles.stars}>
              <p className={styles.rating}>Оцените товар:</p>
              <ReactStars
                classNames={styles.constellation}
                count={Stars.COUNT}
                size={Stars.SIZE}
                isHalf
                a11y
                activeColor="#ffd700"
                name='rating'
                value={data.rating}
                onChange={(value) => handleRatingClick(value)}
              />
            </div>
            <label className={cn(styles.label, styles.labelTextarea)}>
              <span className='visually-hidden'>Комментарий</span>
              <textarea
                className={styles.textarea}
                name='total'
                cols='20'
                rows='5'
                value={data.total}
                onChange={handleInputClick}
              />
            </label>
          </div>
          <button className={styles.submit} type='submit'>Оставить отзыв</button>
        </form>
      </div>
    </section>
  );
}

Modal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  handleModalState: PropTypes.func.isRequired,
};

export default Modal;
