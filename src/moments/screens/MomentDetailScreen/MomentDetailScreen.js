import React from 'react';
import {Box, Card, CardContent} from '@mui/material';

import CreateComment from '../../components/comments/CreateComment';
import {USER_ID} from '../../../constants/constants';
import CommentList from '../../components/comments/CommentList';
import MomentDetail from '../../components/momentDetail/MomentDetail';
import MomentActions from '../../components/momentDetail/MomentActions';
import useMomentDetail from '../../hooks/useMomentDetail';

import './MomentDetailScreen.css';

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
        fetchComments,
    } = useMomentDetail();

    return (
        <Box className="moment-detail-screen">
            <Card className="moment-detail-card">
                <CardContent>
                    <Box className="moment-detail-content">
                        <MomentActions
                            momentUserId={moment.userId}
                            currentUserId={USER_ID}
                            isEditing={isEditing}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                            className="moment-detail-actions" // Add class name
                        />
                        <MomentDetail
                            moment={moment}
                            isEditing={isEditing}
                            updatedContent={updatedContent}
                            setUpdatedContent={setUpdatedContent}
                            handleSave={handleSave}
                            handleCommentIconClick={handleCommentIconClick}
                            className="moment-detail" // Add class name
                        />
                        <Box className="moment-detail-comments-section">
                            <CreateComment
                                isCommenting={isCommenting}
                                newComment={newComment}
                                setNewComment={setNewComment}
                                handleSaveComment={handleSaveComment}
                                className="create-comment" // Add class name
                            />
                            {comments.size > 0 && (
                                <h2 className="comments_header">Comments</h2> // Use the existing class name
                            )}
                            <CommentList
                                comments={comments}
                                momentId={id}
                                fetchComments={fetchComments}
                                className="comment-list" // Add class name
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MomentDetailScreen;
