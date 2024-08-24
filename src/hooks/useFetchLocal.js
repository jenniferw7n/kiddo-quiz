import { useSelector, useDispatch } from 'react-redux';
import { updateKidInfo } from '@/state/kidInfoSlice';

const useFetchLocal = (stateInfoKey, localStorageKey) => {
    const dispatch = useDispatch();
    let data = useSelector((state)=>state[stateInfoKey]);

    if(data) return data;
    if(localStorage.getItem(localStorageKey)) {
        data = JSON.parse(localStorage.getItem(localStorageKey));
        dispatch(updateKidInfo(data));
        return data;
    }
    return null;
}
 
export default useFetchLocal;