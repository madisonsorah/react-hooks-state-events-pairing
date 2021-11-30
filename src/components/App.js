import video from "../data/video.js";
import React, { useState } from "react"
import VideoDetails from "./VideoDetails"
import Buttons from "./Buttons"
import VideoComments from "./VideoComments"

function App() {
  console.log("Here's your data:", video);
  const [isClicked, setClick] = useState(true)

  function commentToggle() {
    setClick((isClicked) => !isClicked)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        text-align="center"
        src={ video.embedUrl }
        frameBorder="0"
        allowFullScreen
        title={ video.title }
      />
      <VideoDetails title={ video.title } views={ video.views } date={ video.createdAt }/>
      <Buttons upvotes={ video.upvotes } downvotes={ video.downvotes } handleToggle={ commentToggle } isClicked={ isClicked } />
      { isClicked ? (<VideoComments commentData={ video.comments } />) : null }
    </div>
  );
}

export default App;
