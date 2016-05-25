import { TOGGLE_LOGIN_DIALOG_VISIBLE } from 'types';

export default function layout(state={loginOpen: false}, action){
  console.log("reducer received action");

  switch(action.type){
    case TOGGLE_LOGIN_DIALOG_VISIBLE:{
        console.log("reducer inside ToogleLoginDialogClicked");
        return  Object.assign({}, state, {
          loginOpen: action.data.open
      });
    } default:
      return state;
  }
}
