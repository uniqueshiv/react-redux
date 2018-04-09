export function changeState(){
  return dispatch=>{
    //console.log("chnage state method from action file");
    dispatch({
      type:'CHANGEUSERNAME',
      payload:'chauhan'
    })
  }

};
