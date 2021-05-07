export const walletReducer = (state=false, action) =>{
    switch (action.type) {
    case 'LOCK':
    return state =false;
    case 'UNLOCK':
    return state =true;
    default:
    return state;
    }
    }