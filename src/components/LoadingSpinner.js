import { BeatLoader } from "react-spinners";

import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = function () {
  return (
    <div className={classes["loading-spinner"]}>
      <BeatLoader loading={true} size={15} margin={8} color="#999" />
    </div>
  );
};

export default LoadingSpinner;
