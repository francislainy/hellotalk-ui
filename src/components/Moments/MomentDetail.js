import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Avatar, Box, Button, Card, CardContent, TextField, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import avatarImage from '../../images/avatar.png'; // Keep the hardcoded avatar image
import colors from "../colors";
import {deleteMoment, getCommentsForMoment, getMoment, updateMoment} from "../../api/api";
import {USER_ID} from '../constants';

const MomentDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [newComment, setNewComment] = useState(''); // New state variable for the new comment's text
    const [isCommenting, setIsCommenting] = useState(false); // New state variable to control the visibility of the comment text field and the save button

    const [moment, setMoment] = useState({})
    const [comments, setComments] = useState([])

    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState(moment.content);

    const fetchMoment = async () => {
        try {
            const response = await getMoment(id);
            setMoment(response.data);
            setUpdatedContent(response.data.content); // Set updatedContent here
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        fetchMoment();
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getCommentsForMoment(id);
                setComments(response.data);
            } catch (error) {
                alert(error)
            }
        };

        fetchComments();
    }, []);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this moment?')) {
            try {
                await deleteMoment(id);
                navigate('/moments'); // Redirect to /moments
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
            fetchMoment();
        } catch (error) {
            alert(error);
        }
    };

    const handleCommentIconClick = () => {
        setIsCommenting(true); // Show the comment text field and the save button when the comment icon is clicked
    };

    const handleSaveComment = async () => {
        // Here you can call an API to save the new comment
        // After saving the comment, you can fetch the comments again to update the comments list
        // And hide the comment text field and the save button
        setIsCommenting(false);
        setNewComment('');
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
            <Card sx={{width: '80%', marginBottom: 4, marginTop: 4, backgroundColor: colors.white, boxShadow: 'none'}}>
                <CardContent>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        {moment.userId === USER_ID && !isEditing && (
                            <div>
                                <Button variant="contained" color="secondary" style={{marginRight: 8}} onClick={handleUpdate}>
                                    Update
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </div>
                        )}
                        <Card sx={{backgroundColor: colors.white, width: 1, mt: 2, ml: 0, mr: 0, boxShadow: 'none'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                {isEditing ? (
                                    <>
                                        <TextField
                                            value={updatedContent}
                                            onChange={(e) => setUpdatedContent(e.target.value)}
                                            sx={{ width: '75%', textAlign: 'center' }}
                                        />
                                        <Button
                                            variant="contained"
                                            onClick={handleSave}
                                            sx={{ marginTop: 2, backgroundColor: colors.primary }}
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

                                {isCommenting && ( // Show the comment text field and the save button if isCommenting is true
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
                        </Card>
                        <Box sx={{width: '100%'}}>
                            {comments.length === 0 ? (
                                <Typography variant="body2" sx={{
                                    color: colors.primary,
                                    textAlign: 'center',
                                    marginTop: 4,
                                    fontWeight: 'bold'
                                }}>
                                    No comments yet.
                                </Typography>
                            ) : (
                                comments.map((comment, index) => (
                                    <Card key={index}
                                          sx={{backgroundColor: colors.chatItemBackground, mt: 2, boxShadow: 'none'}}>
                                        <Box sx={{display: 'flex', alignItems: 'center', p: 2}}>
                                            <Avatar src={avatarImage}/>
                                            <Box sx={{ml: 2}}>
                                                <Typography variant="subtitle2">{comment.user.name}</Typography>
                                                <Typography variant="body2">{comment.content}</Typography>
                                            </Box>
                                        </Box>
                                    </Card>
                                ))
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MomentDetail;

