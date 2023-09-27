import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import colors from "../../../colors/colors";

const CreateComment = ({ isCommenting, newComment, setNewComment, handleSaveComment }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {isCommenting && (
                <>
                    <TextField
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        sx={{ width: '75%', textAlign: 'center', marginTop: 2 }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSaveComment}
                        sx={{ marginTop: 2, backgroundColor: colors.primary }}
                    >
                        Save Comment
                    </Button>
                </>
            )}
        </Box>
    );
};

export default CreateComment;
