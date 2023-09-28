import React from "react";
import {Chip} from "@mui/material";
import colors from "../../../colors/colors";

const UserChipList = ({list}) => {
    return <div className="tag-container">
        {list.map((item, index) => (
            <Chip
                key={index}
                label={item}
                sx={{backgroundColor: colors.primary, color: colors.white, margin: 1}}
            />
        ))}
    </div>
}

export default UserChipList;