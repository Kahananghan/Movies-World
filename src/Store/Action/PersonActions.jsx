export {removeperson} from '../Reducer/PersonSlice'
import axios from '../../utils/axios'
import { loadperson } from "../Reducer/PersonSlice";

export const asyncloadperson = (id) => async(dispatch, getState ) => {
     try {
        const detail = await axios.get(`/person/${id}`)
        const externalid = await axios.get(`/person/${id}/external_ids`)
        const combinedcredits = await axios.get(`/person/${id}/combined_credits`)
        const moviecredits = await axios.get(`/person/${id}/movie_credits`)
        const tvcredits = await axios.get(`/person/${id}/tv_credits`)

        let ultimatedetails = {
            detail : detail.data,
            externalid : externalid.data,
            combinedcredits : combinedcredits.data,
            moviecredits : moviecredits.data,
            tvcredits : tvcredits.data
        }
        dispatch(loadperson(ultimatedetails))
    
     } catch (error) {
        console.log("error: ", error);
     }
};