import React, { useState } from "react";
import Facebook from "./Facebook";

const LikeComponent = () => {
  const [like, setLike] = useState(0);

  return (
    <Facebook data={{ like, setLike }} />
  );
};

export default LikeComponent;
