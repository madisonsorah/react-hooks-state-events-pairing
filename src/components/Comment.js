import React from "react"

function Comment({ user, comment }) {
    return(
        <div>
            <div>{ user }</div>
            <div>{ comment }</div>
        </div>
    )
}

export default Comment;