import { useState } from 'react';
import {deleteComment, updateComment} from "../../api/api";

export const useComment = (comment, momentId, fetchComments) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState(comment.content);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            await deleteComment(momentId, comment.id);
            fetchComments();
        }
    };

    const handleUpdate = async () => {
        if (isEditing) {
            await updateComment(momentId, comment.id, updatedContent);
            fetchComments();
        }
        setIsEditing(!isEditing);
    };

    return { isEditing, updatedContent, setUpdatedContent, handleDelete, handleUpdate };
};