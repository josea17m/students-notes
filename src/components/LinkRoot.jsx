/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const LinkRoot = ({ sectionRoute }) => {
  return (
    <Link className="link-container" to={`/student/${sectionRoute}`}>
      <div className={`relative left-[60px] top-[145px] w-max text-3xl texto`}>
        10°-{sectionRoute}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="200px"
        height="200px"
      >
        {" "}
        <path
          fill="currentColor"
          className={`text-white file-bg duration-300`}
          d="M 3 4 C 1.347656 4 0 5.347656 0 7 L 0 33.09375 C 1.464844 25.296875 3.105469 16.550781 3.1875 16.125 C 3.695313 13.535156 5.648438 12 8.4375 12 L 47 12 L 47 11 C 47 9.347656 45.652344 8 44 8 L 18.03125 8 C 17.753906 7.898438 17.183594 6.992188 16.875 6.5 C 16.105469 5.273438 15.316406 4 14 4 Z M 8.4375 14 C 7.15625 14 5.5625 14.449219 5.15625 16.53125 C 5.027344 17.179688 1.132813 37.910156 0 43.9375 L 0 44 C 0 45.652344 1.347656 47 3 47 L 42 47 C 43.621094 47 44.945313 45.703125 45 44.09375 L 49.96875 17.1875 L 50 17 C 50 15.347656 48.652344 14 47 14 Z"
        />
      </svg>
    </Link>
  );
};

export default LinkRoot;
