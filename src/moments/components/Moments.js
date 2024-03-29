import React from 'react';
import MomentList from "./momentMain/MomentList/MomentList";
import MomentProvider from "../provider/MomentProvider";

const Moments = () => {
    return (
        <MomentProvider>
            <MomentList/>
        </MomentProvider>
    );
}
export default Moments;