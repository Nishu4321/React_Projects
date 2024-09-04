import React from "react";
import FetchData from "./FetchApi/components/FetchData";
import FetchPhotos from "./FetchApi/components/FetchPhotos";
import PostApi from "./PostApi/PostApi";

const Api = () => {
  return (
    <div>
      {/* <FetchPhotos /> */}
      {/* <FetchData /> */}
      <PostApi />
    </div>
  );
};

export default Api;
