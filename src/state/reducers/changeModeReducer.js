let reducer = (state = false, action) => {
    switch (action.type) {
        case 'darkmode':
           
            if(action.payload===true){
                localStorage.setItem("changeMode",false)
                state = action.payload
                return false
            }else{
                localStorage.setItem("changeMode",true)
                state = action.payload
                return true
            }
            
        default:
            if(localStorage.getItem("changeMode") && localStorage.getItem("changeMode")===true){
                return localStorage.getItem("changeMode")
            }else{

                return state
            }            
            
            
    }
}

export default reducer