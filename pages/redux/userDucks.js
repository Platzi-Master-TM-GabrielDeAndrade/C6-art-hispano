// constantes
const dataInicial = {
  loading: false,
  activo: false,
};

// types
const LOADING = "LOADING";
const USER_ERROR = "USER_ERROR";

// reducer
export default function userReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USER_ERROR:
      return { ...dataInicial};
    default:
      return { ...state };
  }
}

// actions
export const loginUserAction = () => async (dispatch) => {
  try {
    const res = await db.collection("products").get();

    dispatch({
      type: LOADING,
      payload: res.data.price,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_ERROR,
    });
  }
};
