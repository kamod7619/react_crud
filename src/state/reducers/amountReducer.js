let reducer = (state = 0, action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            if(state-action.payload<0){
                return state
            }else{

                return state - action.payload;
            }
        default:
            return state
    }
}

export default reducer