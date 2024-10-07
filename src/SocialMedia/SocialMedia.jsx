import React from "react";

import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";

function SocialMedia() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <CreatePost />
      </div>
    </div>
  );
}

export default SocialMedia;
