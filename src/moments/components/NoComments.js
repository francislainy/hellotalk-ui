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
                No comments yet.
            </Typography>
        </>
    );
};

export default NoComments;