import React from "react"

function VideoDetails({ title, views, date}) {
    return (
        <div>
            <h1>{ title }</h1>
            <small>{ views } Views | { date }</small>
        </div>
    )
}

export default VideoDetails;