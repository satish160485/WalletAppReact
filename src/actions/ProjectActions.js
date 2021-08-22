import axios from "axios"
import { GET_ERRORS } from './Types'

export const createwallet = (newWallet, history) => async dispatch => (
    await axios.post('http://localhost:8080/wallet', newWallet).then((res) => {
        history.push('/dashboard')
    }).catch((err) => {
        dispatch({type:GET_ERRORS,payload:err.response.data})
    })

)