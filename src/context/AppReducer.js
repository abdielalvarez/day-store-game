import {
  RESET_STATE,
  SELECT_ANSWER,
  SET_DATA,
  SET_PERSISTENCE
} from "./actionTypes";

const handlePersistence = (stateToStringify) => {
  localStorage.setItem('state', JSON.stringify(stateToStringify));
}

const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_PERSISTENCE:
      return action.payload
    case RESET_STATE:
      handlePersistence(action.payload)
      return action.payload
    case SET_DATA:
      const payloadData = {
        ...state,
        questions: action.payload
      }
      handlePersistence(payloadData)
      return payloadData
    case SELECT_ANSWER:
      const payloadOfSelectedQuestion = {
        ...state,
        questions: action.payload
      }
      handlePersistence(payloadOfSelectedQuestion)
      return payloadOfSelectedQuestion
    default:
      return state;
  }
};

export default AppReducer;
