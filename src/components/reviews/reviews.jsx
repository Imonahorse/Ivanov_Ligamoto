import React, {useState} from 'react';
import styles from './reviews.module.scss';
import Review from '../review/review';
import Modal from '../modal/modal';
import {useSelector} from 'react-redux';

function Reviews() {
  const [modalState, setModalState] = useState(false);
  const reviews = useSelector((state) => state.reviews);
  const handleModalState = () => {
    setModalState((prev)=> !prev);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className='visually-hidden'>Комментарии</h3>
      <button
        type='button'
        className={styles.button}
        onClick={handleModalState}
      >
        Оставить отзыв
      </button>
      <ul className={styles.list}>
        {
          reviews.map((review) => <Review review={review} key={review.id}/>)
        }
      </ul>
      <Modal modalState={modalState} handleModalState={handleModalState}/>
    </div>
  );
}

export default Reviews;
