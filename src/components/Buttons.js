import React, { useState } from "react";

function Buttons( { upvotes, downvotes, handleToggle, isClicked }) {
    const [upvoteCount, setUpvoteCount] = useState(upvotes)
    const [downvoteCount, setDownvoteCount] = useState(downvotes)

  function handleUpvote() {
    setUpvoteCount((upvoteCount) => upvoteCount + 1)
  }

  function handleDownvote() {
    setDownvoteCount((downvoteCount) => downvoteCount - 1)
  }
    
    return (
        <div>
            <button type="text" onClick={handleUpvote}>👍 { upvoteCount }</button><button type="text" onClick={handleDownvote}>👎 { downvoteCount }</button>
            <div>
                <button type="text" onClick={handleToggle}>{isClicked ? "Hide Comments" : "Show Comments"}</button>
            </div>
        </div>
    )
}

export default Buttons;