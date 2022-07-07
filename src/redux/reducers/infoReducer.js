const initialState = {
  phone: '',
};

export default function actionInfoReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'UPDATE_PHONE':
      return {
        ...state,
        phone: payload.phone,
      };

    default:
      return state;
  }
}
