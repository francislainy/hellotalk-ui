import React from 'react';
import NoComments from "../NoComments/NoComments";
import CommentCard from "./CommentCard";

const CommentList = ({comments, momentId, fetchComments}) => {
    return (
        <>
            {comments.length === 0 ? (
                <NoComments/>
            ) : (
                comments.map((comment, index) => (
                    <CommentCard key={index} comment={comment} momentId={momentId} fetchComments={fetchComments}/>
                ))
            )}
        </>
    );
};

export default CommentList;