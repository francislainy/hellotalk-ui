import React from 'react';

import useMoments from '../hooks/useMoments';
import MomentList from "./momentMain/MomentList";

const Moments = () => {
    const {moments} = useMoments('');

    return (
        <MomentList moments={moments}/>
    );
}
export default Moments;