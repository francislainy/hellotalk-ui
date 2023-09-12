import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Avatar, Box, Card, CardContent, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import avatarImage from '../../images/avatar.png'; // Keep the hardcoded avatar image
import colors from "../colors";
import {getCommentsForMoment, getMoment} from "../../api/api";

const MomentDetail = () => {
    const {id} = useParams();
    const [moment, setMoment] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchMoment = async () => {
            try {
                const response = await getMoment(id);
                setMoment(response.data);
            } catch (error) {
                alert(error)
            }
        };

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

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
            <Card sx={{width: '80%', marginBottom: 4, marginTop: 4, backgroundColor: colors.white, boxShadow: 'none'}}>
                <CardContent>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Card sx={{backgroundColor: colors.white, width: 1, mt: 2, ml: 0, mr: 0, boxShadow: 'none'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="h5">{moment.content}</Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', mt: 2}}>
                                    <ThumbUpIcon/>
                                    <Typography variant="body2" sx={{ml: 1}}>{moment.likes}</Typography>
                                    <CommentIcon sx={{ml: 2}}/>
                                    <Typography variant="body2" sx={{ml: 1}}>{moment.comments}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Box sx={{width: '100%'}}>
                            {comments.map((comment, index) => (
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
                            ))}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MomentDetail;