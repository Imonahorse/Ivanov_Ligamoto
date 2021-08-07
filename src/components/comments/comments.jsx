import React from 'react';
import styles from './comments.module.scss';
import Comment from '../comment/comment';

const comments = [
  {
    id: '1',
    name: 'Борис Иванов',
    benefits: 'мощность, внешний вид',
    flaws: 'Слабые тормозные колодки (пришлось заменить)',
    total: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: '3',
  },
  {
    id: '2',
    name: 'Марсель Исмагилов',
    benefits: 'Стиль, комфорт, управляемость',
    flaws: 'Дорогой ремонт и обслуживание',
    total: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: '3',
  },
];

function Comments() {
  return (
    <div className={styles.wrapper}>
      <h3 className='visually-hidden'>Комментарии</h3>
      <button type='button' className={styles.button}>Оставить отзыв</button>
      <ul className={styles.list}>
        {
          comments.map((comment) => <Comment comment={comment} key={comment.id}/>)
        }
      </ul>
    </div>
  );
}

export default Comments;
