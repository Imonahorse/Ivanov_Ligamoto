import {createAction} from '@reduxjs/toolkit';

const ActionsTypes = {
  ADD_REVIEW: 'addReview',
};

const addReview = createAction(ActionsTypes.ADD_REVIEW, (review) => ({
  payload: review,
}));

export default addReview;
