import * as actions from './starter.actions';


export interface Starter {
  name?: any;
}

const initialState: Starter = {
 name: 'sad'
};

export function starterReducer(state = initialState, action: actions.Actions) {

  switch (action.type) {

    case actions.STARTER_GET_SUCCESS:

      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
}
