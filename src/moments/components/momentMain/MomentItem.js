import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Avatar, Box, Card, CardContent, IconButton, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import avatarImage from '../../../images/avatar.png';
import './MomentItem.css';
import {likeMoment, unlikeMoment} from "../../../api/api";
import {USER_ID} from "../../../constants/constants";

const MomentItem = ({moment, index}) => {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState( false);

    const handleClick = (e) => {
        e.stopPropagation();
        navigate(`/moment-detail/${index}`);
    };

    useEffect(() => {
        setIsLiked(moment && moment.likedByIds ? moment.likedByIds.includes(USER_ID) : false);
    }, [moment]);

    const handleLikeClick = async (e) => {
        e.stopPropagation();
        try {
            if (isLiked) {
                await unlikeMoment(moment.id);
            } else {
                await likeMoment(moment.id);
            }
            setIsLiked(!isLiked);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div onClick={handleClick}>
            <Card sx={{marginBottom: 2}}>
                <CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Avatar alt={moment.userId} src={avatarImage}/>
                        <Box sx={{marginLeft: 2}}>
                            <Typography variant="subtitle1">{moment.userId}</Typography>
                            <Typography variant="body2" color="textSecondary">{moment.userId}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body1">{moment.content}</Typography>
                    <Box sx={{display: 'flex', marginTop: 1}}>
                        <IconButton disableRipple className={isLiked ? "moment_item__like_icon--liked" : "moment_item__like_icon"} onClick={handleLikeClick}>
                            <ThumbUpIcon/>
                        </IconButton>
                        <IconButton disableRipple className="moment_item__comment_icon" >
                            <CommentIcon/>
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default MomentItem;