import React from "react";
import LoadingBar from "react-top-loading-bar";
import { useProgress } from "../../context/ProgressContext";

const TopLoadingBar = () => {
    //context api
    const [progress, setProgress] = useProgress()
  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default TopLoadingBar;
