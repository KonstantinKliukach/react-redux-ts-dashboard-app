import { Action } from 'redux';
import { User } from 'context/redux/reducers/auth';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'context/redux/store';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const LOGOUT = 'LOGOUT';

export type AuthRequestAction = Action<typeof AUTH_REQUEST>

export type LogoutAction = Action<typeof LOGOUT>

export interface AuthSuccessAction extends Action<typeof AUTH_SUCCESS> {
  payload: {
    user: User,
  }
}

export interface AuthFailureAction extends Action<typeof AUTH_FAILURE> {
  payload: {
    error: string,
  }
}

export type AuthActions = AuthRequestAction | AuthSuccessAction | AuthFailureAction | LogoutAction;

export const auth = (): ThunkAction<
Promise<void>,
RootState,
undefined,
AuthActions
> => async (dispatch) => {
  dispatch({
    type: AUTH_REQUEST,
  });
  try {
    console.log('mock');
  } catch (error) {
    const err = error as Error;
    dispatch({
      type: AUTH_FAILURE,
      payload: {
        error: err.message,
      },
    });
  }
};
