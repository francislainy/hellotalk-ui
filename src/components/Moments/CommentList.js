import React from 'react';
import NoComments from "./NoComments";
import CommentCard from "./CommentCard";

const CommentList = ({comments}) => {
    return (
        <>
            {comments.length === 0 ? (
                <NoComments/>
            ) : (
                comments.map((comment, index) => (
                    <CommentCard key={index} comment={comment}/>
                ))
            )}
        </>
    );
};

export default CommentList;