import * as React from "react";
import { SVGProps } from "react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="13.65"
    viewBox="0 0 14 13.65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 0.672363C3.13483 0.672363 0 3.80661 0 7.67236C0 10.7652 2.0055 13.389 4.78742 14.3148C5.13683 14.3795 5.25 14.1625 5.25 13.9782V12.675C3.30283 13.0985 2.89742 11.849 2.89742 11.849C2.57892 11.0399 2.11983 10.8247 2.11983 10.8247C1.48458 10.3901 2.16825 10.3994 2.16825 10.3994C2.87117 10.4484 3.241 11.121 3.241 11.121C3.86517 12.1909 4.87842 11.8817 5.278 11.7026C5.34042 11.2505 5.52183 10.9414 5.7225 10.7669C4.16792 10.589 2.53342 9.98878 2.53342 7.3072C2.53342 6.54245 2.807 5.91828 3.25442 5.42828C3.18208 5.25153 2.94233 4.53928 3.32267 3.57561C3.32267 3.57561 3.91067 3.38778 5.24825 4.29311C5.8065 4.13795 6.405 4.06036 7 4.05745C7.595 4.06036 8.19408 4.13795 8.7535 4.29311C10.0899 3.38778 10.6767 3.57561 10.6767 3.57561C11.0577 4.53986 10.8179 5.25211 10.7456 5.42828C11.1947 5.91828 11.466 6.54303 11.466 7.3072C11.466 9.99578 9.82858 10.5879 8.26992 10.7611C8.52075 10.9781 8.75 11.4039 8.75 12.0573V13.9782C8.75 14.1643 8.862 14.383 9.21725 14.3142C11.9968 13.3873 14 10.764 14 7.67236C14 3.80661 10.8657 0.672363 7 0.672363Z"
      fill="#566172"
    />
  </svg>
);

// eslint-disable-next-line import/no-default-export
export default GithubIcon;