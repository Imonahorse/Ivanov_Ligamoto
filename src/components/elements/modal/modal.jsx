import React, {useEffect, useRef, useState} from 'react';
import styles from './modal.module.scss';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import addReview from '../../../store/actions';
import Button from '../button/button';
import ReactModal from 'react-modal';

const MIN_LENGTH = 1;

const Stars = {
  SIZE: 35,
  COUNT: 5,
};

const Inputs = {
  NAME: 'name',
  RATING: 'rating',
  GOOD: 'good',
  BAD: 'bad',
  COMMENT: 'comment',
};

function Modal({modalState, handleModalState}) {
  const nameRef = useRef('');
  const storage = localStorage.getItem('form');
  const initState = storage ? JSON.parse(storage) : {
    [Inputs.NAME]: '',
    [Inputs.RATING]: 0,
    [Inputs.GOOD]: '',
    [Inputs.BAD]: '',
    [Inputs.COMMENT]: '',
  };

  const [form, setForm] = useState(initState);
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(form));
  }, [form]);

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

    const isValidName = name.replace(/ +/g, ' ').trim().length >= MIN_LENGTH;
    const isValidComment = comment.replace(/ +/g, ' ').trim().length >= MIN_LENGTH;

    if (!isValidName) {
      setNameError(true);
      return;
    }

    if (!isValidComment) {
      setCommentError(true);
      return;
    }

    setNameError(false);
    setCommentError(false);

    dispatch(addReview({
      ...form,
      id: Math.random().toFixed(3),
    }));
    handleModalState();
    localStorage.clear();
  };

  const handleAfterOpen = () => {
    nameRef.current.focus();
    document.body.classList.add(styles.open);
  };

  const handleAfterClose = () => {
    document.body.classList.remove(styles.open);
  };

  return (
    <ReactModal
      isOpen={modalState}
      contentLabel={'Форма отзыва'}
      overlayClassName={styles.modal}
      className={styles.inner}
      onRequestClose={handleModalState}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Оставить отзыв</h2>
        <button
          className={styles.close}
          type='button'
          onClick={handleModalState}
        >
          <span className='visually-hidden'>Закрыть модальное окно</span>
        </button>
      </div>
      <form action="#" onSubmit={handleSubmitClick}>
        <div className={styles.form}>
          <label className={cn(styles.label, styles.label_name)}>
            {
              nameError && <span className={cn(styles.error, nameError && styles.error_name)}>Пожалуйста, заполните поле</span>
            }
            <span className='visually-hidden'>Ваше имя</span>
            <input
              className={cn(styles.input, nameError && styles.input_required)}
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
          <label className={cn(styles.label, styles.label_good)}>
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
          <label className={cn(styles.label, styles.label_bad)}>
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
              activeColor='#D12136'
              name={Inputs.RATING}
              value={form[Inputs.RATING]}
              onChange={(value) => handleRatingClick(value)}
            />
          </div>
          <label className={cn(styles.label, styles.label_textarea)}>
            {
              commentError && <span className={cn(styles.error, commentError && styles.error_comment)}>Пожалуйста, заполните поле</span>
            }
            <span className='visually-hidden'>Комментарий</span>
            <textarea
              className={cn(styles.textarea, commentError && styles.textarea_required)}
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
    </ReactModal>
  );
}

Modal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  handleModalState: PropTypes.func.isRequired,
};

export default Modal;
