import React, { useState } from "react";
import UnfilledHeart from "../../Images/Favourite/unfilled_heart.png";
import FilledHeart from "../../Images/Favourite/filled_heart.png";

export function LikePeep({ id, authenticated, handleLike }) {
  const [liked, updateLikeState] = useState(false);

  function like(){
    handleLike(id)
    updateLikeState(true)
  }

  if (!liked && !authenticated) {
    return (
      <div>
        <img src={UnfilledHeart} alt="Like" />{" "}
      </div>
    );
  }

  if (!liked && authenticated) {
    return (
      <div onClick = {like}> 
        <img src={UnfilledHeart} alt="Like" />{" "}
      </div>
    );
  }

  if(liked){
    return <div>'foo'</div>
  }
}



// unliked && unathenticated => empty heart which does nothing (or displays login prompt)
// unliked && athenticated => empty heart which calls like
// liked && authenticated => filled heart which calls unliked
