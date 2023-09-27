import React from 'react';
import {Box, Card, CardContent} from '@mui/material';

import CreateComment from '../components/comments/CreateComment';
import {USER_ID} from "../../constants/constants";
import colors from "../../colors/colors";
import CommentList from "../components/comments/CommentList";
import MomentDetail from "../components/momentDetail/MomentDetail";
import MomentActions from "../components/momentDetail/MomentActions";
import useMomentDetail from "../hooks/useMomentDetail";

const MomentDetailScreen = () => {
    const {
        moment,
        comments,
        isEditing,
        updatedContent,
        newComment,
        isCommenting,
        handleDelete,
        handleUpdate,
        handleSave,
        handleCommentIconClick,
        handleSaveComment,
        setUpdatedContent,
        setNewComment,
        id,
        fetchComments
    } = useMomentDetail();

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', minHeight: '100vh'}}>
            <Card sx={{width: '80%', marginBottom: 4, marginTop: 4, backgroundColor: colors.white, boxShadow: 'none'}}>
                <CardContent>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <MomentActions
                            momentUserId={moment.userId}
                            currentUserId={USER_ID}
                            isEditing={isEditing}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                        />
                        <MomentDetail
                            moment={moment}
                            isEditing={isEditing}
                            updatedContent={updatedContent}
                            setUpdatedContent={setUpdatedContent}
                            handleSave={handleSave}
                            handleCommentIconClick={handleCommentIconClick}
                        />
                        <Box sx={{width: '100%'}}>
                            <CreateComment
                                isCommenting={isCommenting}
                                newComment={newComment}
                                setNewComment={setNewComment}
                                handleSaveComment={handleSaveComment}
                            />
                            <CommentList comments={comments} momentId={id} fetchComments={fetchComments}/>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MomentDetailScreen;