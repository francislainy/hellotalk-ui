import { useEffect, useState } from 'react';
import {getMoments} from "../../api/api";

const useMoments = (param = '') => {
    const [moments, setMoments] = useState([])

    const fetchMoments = async (param) => {
        try {
            const response = await getMoments(param);
            setMoments(response.data);
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        fetchMoments(param);
    }, [param]);

    return { moments, fetchMoments };
}

export default useMoments;