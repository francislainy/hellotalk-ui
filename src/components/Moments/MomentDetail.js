import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Box, Button, Card, CardContent, TextField, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

import CreateCommentSection from './CreateCommentSection';
import {createComment, deleteMoment, getCommentsForMoment, getMoment, updateMoment,} from '../../api/api';
import {USER_ID} from "../constants";
import colors from "../colors"; // Import your API functions
import CommentList from "./CommentList";

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
        <Box sx={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
            <Card sx={{width: '80%', marginBottom: 4, marginTop: 4, backgroundColor: colors.white, boxShadow: 'none'}}>
                <CardContent>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        {moment.userId === USER_ID && !isEditing && (
                            <div>
                                <Button variant="contained" color="secondary" style={{marginRight: 8}}
                                        onClick={handleUpdate}>
                                    Update
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </div>
                        )}
                        <Card
                            sx={{backgroundColor: colors.white, width: 1, mt: 2, ml: 0, mr: 0, boxShadow: 'none'}}
                        >
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
                        <Box sx={{width: '100%'}}>
                            <CreateCommentSection
                                isCommenting={isCommenting}
                                newComment={newComment}
                                setNewComment={setNewComment}
                                handleSaveComment={handleSaveComment}
                            />
                           <CommentList comments={comments} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MomentDetail;
