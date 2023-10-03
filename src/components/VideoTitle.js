import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-80 px-12 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="p-4  bg-white text-black rounded align-center ">
          ▶️ Play
        </button>
        <button className="p-4  mx-4 bg-white text-black rounded align-center  ">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
