import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Box, Card, CardContent} from '@mui/material';

import CreateCommentSection from './CreateCommentSection';
import {createComment, deleteMoment, getCommentsForMoment, getMoment, updateMoment,} from '../../api/api';
import {USER_ID} from "../../constants/constants";
import colors from "../../colors/colors"; // Import your API functions
import CommentList from "./CommentList";
import MomentDetailCard from "./MomentDetailCard";
import MomentActions from "./MomentActions";

const MomentDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [moment, setMoment] = useState({});
    const [comments, setComments] = useState([]);

    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState('');

    const [newComment, setNewComment] = useState('');
    const [isCommenting, setIsCommenting] = useState(false);

    const fetchMoment = async () => {
        try {
            const response = await getMoment(id);
            setMoment(response.data);
            setUpdatedContent(response.data.content);
        } catch (error) {
            alert(error);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await getCommentsForMoment(id);
            setComments(response.data);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchMoment();
        fetchComments();
    }, []);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this moment?')) {
            try {
                await deleteMoment(id);
                navigate('/moments');
            } catch (error) {
                alert(error);
            }
        }
    };

    const handleUpdate = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            await updateMoment(id, updatedContent);
            setIsEditing(false);
            await fetchMoment();
        } catch (error) {
            alert(error);
        }
    };

    const handleCommentIconClick = () => {
        setIsCommenting(true);
    };

    const handleSaveComment = async () => {
        try {
            await createComment(id, newComment);
            setIsCommenting(false);
            setNewComment('');
            await fetchComments();
            await fetchMoment();
        } catch (error) {
            alert(error);
        }
    };

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
                        <MomentDetailCard
                            moment={moment}
                            isEditing={isEditing}
                            updatedContent={updatedContent}
                            setUpdatedContent={setUpdatedContent}
                            handleSave={handleSave}
                            handleCommentIconClick={handleCommentIconClick}
                        />
                        <Box sx={{width: '100%'}}>
                            <CreateCommentSection
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

export default MomentDetail;
