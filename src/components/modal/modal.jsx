import React, {useEffect, useRef, useState} from 'react';
import styles from './modal.module.scss';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import addReview from '../../store/actions';
import Button from '../button/button';

const Stars = {
  SIZE: 36,
  COUNT: 5,
};

const Inputs = {
  NAME: 'name',
  RATING: 'rating',
  GOOD: 'good',
  BAD: 'bad',
  COMMENT: 'comment',
};

function Modal({handleModalState}) {
  const nameRef = useRef('');
  const storage = localStorage.getItem('form');
  const initState = storage ? JSON.parse(storage) : {
    [Inputs.NAME]: '',
    [Inputs.RATING]: '0',
    [Inputs.GOOD]: '',
    [Inputs.BAD]: '',
    [Inputs.COMMENT]: '',
  };

  const [form, setForm] = useState(initState);
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(form));
  }, [form]);

  const handleEscClick = (evt) => {
    if (evt.key === 'ESC' || evt.key === 'Escape') {
      handleModalState();
    }
  };

  const handleInputClick = (evt) => {
    const {name, value} = evt.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRatingClick = (value) => {
    setForm({
      ...form,
      [Inputs.RATING]: value,
    });
  };

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    const name = form[Inputs.NAME];
    const comment = form[Inputs.COMMENT];

    if (!name) {
      setNameError(true);
      return;
    }

    if (!comment) {
      setCommentError(true);
      return;
    }

    setNameError(true);
    setCommentError(true);


    dispatch(addReview({
      ...form,
      id: Math.random().toFixed(3),
    }));
    handleModalState();
    localStorage.clear();
  };

  return (
    <section
      className={styles.modal}
      onClick={handleModalState}
      onKeyDown={handleEscClick}
    >
      <div
        className={styles.inner}
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
              {
                nameError && <span className={cn(styles.error, nameError && styles.errorName)}>Пожалуйста, заполните поле</span>
              }
              <span className='visually-hidden'>Ваше имя</span>
              <input
                className={cn(styles.input, nameError && styles.inputRequired)}
                name={Inputs.NAME}
                ref={nameRef}
                type="text"
                value={form[Inputs.NAME]}
                onChange={handleInputClick}
                placeholder='Имя'
                onFocus={() => {
                  if (nameError) {
                    setNameError(false);
                  }
                }}
              />
            </label>
            <label className={cn(styles.label, styles.labelGood)}>
              <span className='visually-hidden'>Достоинства</span>
              <input
                className={styles.input}
                name={Inputs.GOOD}
                type="text"
                value={form[Inputs.GOOD]}
                onChange={handleInputClick}
                placeholder='Достоинства'
              />
            </label>
            <label className={cn(styles.label, styles.labelBad)}>
              <span className='visually-hidden'>Недостатки</span>
              <input
                className={styles.input}
                name={Inputs.BAD}
                type="text"
                value={form[Inputs.BAD]}
                onChange={handleInputClick}
                placeholder='Недостатки'
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
                name={Inputs.RATING}
                value={form[Inputs.RATING]}
                onChange={(value) => handleRatingClick(value)}
              />
            </div>
            <label className={cn(styles.label, styles.labelTextarea)}>
              {
                commentError && <span className={cn(styles.error, commentError && styles.errorComment)}>Пожалуйста, заполните поле</span>
              }
              <span className='visually-hidden'>Комментарий</span>
              <textarea
                className={cn(styles.textarea, commentError && styles.textareaRequired)}
                name={Inputs.COMMENT}
                cols='20'
                rows='4'
                value={form[Inputs.COMMENT]}
                onChange={handleInputClick}
                placeholder='Комментарий'
                onFocus={() => {
                  if (commentError) {
                    setCommentError(false);
                  }
                }}
              />
            </label>
          </div>
          <Button red className={styles.submit} type='submit'>Оставить отзыв</Button>
        </form>
      </div>
    </section>
  );
}

Modal.propTypes = {
  handleModalState: PropTypes.func.isRequired,
};

export default Modal;
