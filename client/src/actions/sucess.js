import { SET_SUCCESS, REMOVE_SUCCES } from './types';
import uuid from 'uuid';

export const setAlert = (msg,alertType,timeout=5000) =>dispatch=> {
    const id = uuid.v4();
    dispatch({
        type: SET_SUCCESS,
        payload: {
            msg,
            alertType,
            id
        }
    });

    setTimeout(() => dispatch({
        type: REMOVE_SUCCES,
        payload:id
    }),timeout);
}