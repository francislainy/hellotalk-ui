import React from "react";
import {Typography} from "@mui/material";
import colors from "../../colors/colors";

const NoComments = () => {
    return (
        <>
            <Typography variant="body2" sx={{
                color: colors.primary,
                textAlign: 'center',
                marginTop: 4,
                fontWeight: 'bold'
            }}>
                Be the first to comment. :)
            </Typography>
        </>
    );
};

export default NoComments;