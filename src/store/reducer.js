import {createReducer} from '@reduxjs/toolkit';
import addReview from './actions';

const data = [
  {
    id: 1,
    name: 'Борис Иванов',
    benefits: 'мощность, внешний вид',
    flaws: 'Слабые тормозные колодки (пришлось заменить)',
    total: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: '3',
  },
  {
    id: 2,
    name: 'Марсель Исмагилов',
    benefits: 'Стиль, комфорт, управляемость',
    flaws: 'Дорогой ремонт и обслуживание',
    total: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: '3',
  },
];

const initialState = {
  reviews: data,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    });
});

export default reducer;

