import { TODECRYPT, TOENCRYPT } from "../actions/actionNames";

const initialState={
    step: "",
    toEncrypt: "",
    toDecrypt: "" 
}

function rootReducer(state=initialState, action) {
    switch(action.type){
        case TODECRYPT: {
            return {
                ...state,
                toDecrypt: action.payload.data.result,
            }
        }

        case TOENCRYPT: {
            return {
                ...state,
                toEncrypt: action.payload.data.result,
            }
        }

        default:
            return {
                ...state
            }


    }


}

export default rootReducer;