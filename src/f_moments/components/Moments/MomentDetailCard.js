import React from 'react';
import {Box, Button, Card, TextField, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import colors from "../../../colors/colors";

const MomentDetailCard = ({ moment, isEditing, updatedContent, setUpdatedContent, handleSave, handleCommentIconClick }) => {
    return (
        <Card sx={{backgroundColor: colors.white, width: 1, mt: 2, ml: 0, mr: 0, boxShadow: 'none'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {isEditing ? (
                    <>
                        <TextField
                            value={updatedContent}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                            sx={{width: '75%', textAlign: 'center'}}
                        />
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            sx={{marginTop: 2, backgroundColor: colors.primary}}
                        >
                            Save
                        </Button>
                    </>
                ) : (
                    <Typography variant="h5">{moment.content}</Typography>
                )}
                <Box sx={{display: 'flex', alignItems: 'center', mt: 2}}>
                    <ThumbUpIcon/>
                    <Typography variant="body2" sx={{ml: 1}}>{moment.likes}</Typography>
                    <CommentIcon sx={{ml: 2}} onClick={handleCommentIconClick}/>
                    <Typography variant="body2" sx={{ml: 1}}>{moment.comments}</Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default MomentDetailCard;