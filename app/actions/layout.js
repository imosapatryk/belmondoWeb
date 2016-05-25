import * as types from 'types';

export function toogleLoginDialogVisible(open){
  console.log("ToogleLoginDialogClicked");
  return {
    type: types.TOGGLE_LOGIN_DIALOG_VISIBLE,
    data:{
      open: open
    }
  };
}
