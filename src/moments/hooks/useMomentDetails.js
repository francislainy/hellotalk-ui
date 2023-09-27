// src/hooks/useMomentDetail.js
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getMoment, getCommentsForMoment, deleteMoment, updateMoment, createComment} from '../../api/api';

const useMomentDetail = () => {
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

    useEffect(() => {
        fetchMoment();
        fetchComments();
    }, []);

    return {
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
    };
};

export default useMomentDetail;