import axios from 'axios';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const fetchUserRequest = () => {
    return {
      type: 'FETCH_USER_REQUEST',
    };
  };
  
  export const fetchUserSuccess = (user) => {
    return {
      type: 'FETCH_USER_SUCCESS',
      payload: user,
    };
  };
  
  export const fetchUserFailure = (error) => {
    return {
      type: 'FETCH_USER_FAILURE',
      payload: error,
    };
  };
  
  // Función asincrónica para obtener el usuario
  export const fetchUser = (userId) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_USER_REQUEST });
      try {
        const response = await axios.get(`/api/personas/personaid/${userId}`);
        dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
      }
    };
  };
  
  