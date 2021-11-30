import React from "react"
import Comment from "./Comment"

function VideoComments({ commentData }) {
    const commentList = commentData.map((comment) => (
        <Comment 
        key={ comment.id }
        user={ comment.user }
        comment={ comment.comment }
        />
    ))
    return (
        <div> { commentList.length } Comments
            <div>{ commentList }</div>
        </div>
    )
}

export default VideoComments;