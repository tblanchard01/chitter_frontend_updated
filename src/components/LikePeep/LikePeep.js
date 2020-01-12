import  React, {useState } from "react";
import UnfilledHeart from "../../Images/Favourite/unfilled_heart.png";
import FilledHeart from "../../Images/Favourite/unfilled_heart.png";

export function LikePeep({ id, authenticated, handleLike }) {
 const [liked, updateLikeState] = useState(false);

 function like() {
    handleLike(id);
     updateLikeState(true);
    console.log("....called like");
    console.log({ liked });
  }

  if (!liked && !authenticated) {
    return <div> <img src={UnfilledHeart} alt="Like" /></div>
    
  }

  if (!liked && authenticated) {
    return (
      <div onClick={like}>
        <img src={UnfilledHeart} alt="Like" />
      </div>
    );
  }}


// unliked && unathenticated => empty heart which does nothing (or displays login prompt)
// unliked && athenticated => empty heart which calls like
// liked && authenticated => filled heart which calls unliked
