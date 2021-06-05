import { BUY_ICECREAM }  from './icecereamTypes'

const initialState = {
    numOfIcecreams : 20
}

const icecreamReducer = (state = initialState, action) => {
     switch(action.type){
         case BUY_ICECREAM: return {
             numOfIcecreams: state.numOfIcecreams - 1
         }
         default: return state
     }
}

export default icecreamReducer;