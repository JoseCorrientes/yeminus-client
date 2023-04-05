import axios from "axios";
import { TODECRYPT, TOENCRYPT } from "./actionNames";


export function decrypt(data) {
    return async function(dispatch){
        try{
            let result=await axios.post('http://localhost:3001/decrypt', data);
            return dispatch({
                type: TODECRYPT,
                payload: result
            })

        } catch(e) {
            console.log(e);
        }
    }
}
export function encrypt(data) {
    return async function(dispatch){
        try{
            let result=await axios.post('http://localhost:3001/encrypt', data);
            return dispatch({
                type: TOENCRYPT,
                payload: result
            })

        } catch(e) {
            console.log(e);
        }
    }
}