import React from "react";
import { useHistory } from "react-router-dom";

import AnimatedComponent from "./AnimatedComponent";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import get from "lodash/get";
import { ERROR_LOADING_DATA } from "../../store/actions/fullAddonPageAction";
import { getErrorHelpMessage } from "../../helpers/getErrorHelpMessage";

const ErrorComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  min-height: 720px;
  margin: 60px auto;
  max-width: 1146px;
  background: #f2f3f9;
  font-family: Montserrat;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 219px;
    text-align: center;
    text-transform: uppercase;
    color: #383680;
  }

  .text {
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #383680;
  }

  .btn {
    background: #ff8f3e;
    padding: 10px;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.457143px;
    border: none;
  }
  .help-err-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #61626a;
    margin: 30px 0;
  }
`;

const ErrorPageComp = ({ status = "", statusText = "" }) => {
  const history = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { app } = state;
  const { error } = app;
  const { err } = error;

  if (get(err, "status") === 401) {
    dispatch({
      type: ERROR_LOADING_DATA,
      payload: { isError: false, message: "", err: null },
    });

    localStorage.clear();
    history.push("/");
  }

  if (!get(err, "status", status)) {
    history.push("/");
  }

  console.log(get(err, "status"));

  return (
    <AnimatedComponent>
      <ErrorComp>
        <div className="title">{get(err, "status", status)}</div>
        <div className="text">{get(err, "statusText", statusText)}</div>
        <div
          className="help-err-text"
          dangerouslySetInnerHTML={{
            __html: getErrorHelpMessage(get(err, "status")),
          }}
        />

        <button
          className="btn"
          onClick={() => {
            dispatch({
              type: ERROR_LOADING_DATA,
              payload: { isError: false, message: "", err: null },
            });
            history.push("/add-ons");
          }}
        >
          Back to the home page
        </button>

        <svg
          width="601"
          height="163"
          viewBox="0 0 601 163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <path
              d="M362.101 18.6911C361.957 18.979 361.669 19.8427 361.093 20.7064C355.476 30.3511 350.003 40.1397 344.242 49.7844C343.09 51.6558 341.649 53.3832 339.057 51.7997C336.752 50.2163 337.184 48.3449 338.481 46.1857C344.098 36.541 349.715 26.7524 355.332 17.1077C356.34 15.3803 357.636 14.0847 359.941 14.8045C361.525 15.2363 362.245 16.3879 362.101 18.6911Z"
              fill="#383680"
            />
            <path
              d="M288.648 48.628C288.792 50.3554 287.784 51.363 286.344 51.9388C284.759 52.6586 283.319 51.7949 282.599 50.6433C276.406 40.1349 270.213 29.6265 264.164 18.9742C263.299 17.3908 264.02 15.6633 265.892 14.7996C267.476 14.0799 268.916 14.3678 269.781 15.6633C276.118 26.3157 282.311 37.1119 288.504 47.9082C288.792 48.1961 288.648 48.484 288.648 48.628Z"
              fill="#383680"
            />
            <path
              d="M316.453 21.7145C316.453 27.1846 316.453 32.6547 316.453 38.1248C316.453 40.572 316.309 43.307 312.997 43.1631C310.26 43.1631 309.828 40.8599 309.828 38.5567C309.828 27.6164 309.828 16.6762 309.828 5.59203C309.828 3.28883 310.116 0.985621 312.853 0.841671C316.165 0.69772 316.453 3.28883 316.453 5.87993C316.453 11.2061 316.453 16.5323 316.453 21.7145Z"
              fill="#383680"
            />
            <path
              d="M582.187 158.895C579.018 158.319 576.714 156.592 576.858 153.281C577.002 150.258 579.018 148.387 582.043 148.387C584.923 148.387 587.084 149.97 587.228 153.137C587.372 156.592 585.356 158.319 582.187 158.895Z"
              fill="#383680"
            />
            <path
              d="M597.737 30.0695C594.568 29.2058 593.848 31.9409 592.984 34.2441C592.696 35.1078 592.552 36.1154 592.408 36.9791C588.375 53.1016 585.783 69.368 583.622 85.7783C582.038 97.2943 577.429 106.651 565.331 111.545C564.899 100.749 560.722 92.544 551.504 87.3617C544.015 83.1872 536.382 83.619 532.205 88.3694C527.596 93.5516 528.172 102.189 533.357 108.954C538.254 115.288 545.167 118.023 552.657 118.743C557.121 119.175 557.121 120.758 555.969 124.213C552.657 134.146 542.575 140.479 532.925 138.32C523.996 136.305 518.811 127.38 520.539 116.152C521.403 110.682 523.419 105.643 525.58 100.461C527.452 96.1427 525.724 93.9835 520.971 94.8472C515.786 95.8548 511.033 98.158 506.712 101.181C500.231 105.931 495.478 110.394 493.894 118.023C493.03 121.046 492.166 124.069 491.158 127.092C490.005 130.547 488.997 131.842 488.421 132.85C486.837 135.873 484.965 138.608 482.228 140.911C478.771 143.79 474.883 145.95 470.418 143.934C465.665 141.775 466.529 137.169 467.105 133.138C468.114 126.228 469.122 119.319 468.258 112.409C467.393 105.068 464.657 102.333 457.6 101.613C457.312 101.613 456.736 101.613 456.736 101.613C451.551 101.325 443.485 107.227 443.341 107.227C439.596 109.674 436.572 112.985 433.691 116.584C431.675 119.031 427.786 117.159 428.362 114.137C428.65 112.985 428.795 111.833 429.083 110.826C430.091 106.363 428.939 104.204 423.898 105.787C419.865 107.083 415.688 108.235 411.511 109.242C401.574 111.545 391.636 112.697 381.698 109.674C379.25 108.954 375.793 108.666 377.377 104.06C379.97 96.7185 378.097 91.1045 373.921 85.2025C373.777 84.9146 373.057 84.0509 372.625 83.619C370.464 81.3158 367.728 79.5884 364.847 78.1489C362.687 76.9973 362.975 78.005 361.39 79.4445C361.246 79.5884 361.246 79.7324 361.102 79.7324C358.366 83.619 355.629 87.5057 352.893 91.2484C351.021 93.8395 344.683 101.469 341.515 106.651C340.075 108.954 340.795 111.977 342.955 113.561C348.86 117.591 355.341 121.334 362.111 117.879C370.176 113.993 376.225 114.712 384.147 117.303C384.435 117.447 385.587 117.591 385.875 117.735C396.533 119.751 406.327 117.591 416.552 115.144C418.713 114.568 420.729 116.584 420.153 118.743C420.153 118.887 420.009 119.175 420.009 119.319C419.001 126.228 417.705 132.994 416.84 139.904C416.408 143.071 414.392 147.245 418.857 148.685C423.033 149.98 423.466 145.518 424.906 142.927C429.083 135.153 433.547 127.38 439.308 120.614C442.909 116.44 446.654 112.409 451.695 109.962C458.32 106.795 461.344 108.379 461.488 115.576C461.488 121.766 460.48 127.956 459.904 134.146C459.184 140.192 460.192 145.806 465.665 149.404C470.994 152.859 476.611 152.427 482.084 149.404C487.701 146.381 490.726 142.639 494.182 136.881C494.758 136.017 494.758 135.873 495.91 133.57C497.495 129.971 498.503 126.516 499.079 122.63C500.231 113.273 507.145 106.219 516.794 104.78C514.49 109.242 513.626 113.993 513.338 118.743C512.473 130.691 518.955 141.343 528.748 144.51C539.838 148.109 552.513 143.358 558.85 133.282C560.866 129.971 562.45 126.516 563.315 122.774C563.603 121.19 563.603 119.175 565.619 118.743C571.092 117.303 575.413 113.849 580.454 110.682C580.022 119.319 579.59 127.236 579.301 135.153C579.157 138.032 578.725 141.775 582.758 141.775C586.935 141.775 586.071 137.888 586.215 135.153C586.647 114.712 588.663 94.5593 591.688 74.4062C593.704 61.5946 596.008 48.927 599.177 36.4033C600.329 33.6683 600.617 30.9332 597.737 30.0695ZM556.113 112.553C548.912 113.993 537.39 106.219 536.382 99.0217C535.662 93.8395 538.254 91.1045 543.151 91.6803C550.64 92.544 558.13 101.037 558.13 108.81C557.842 110.106 558.706 111.977 556.113 112.553Z"
              fill="#383680"
            />
            <path
              d="M289.951 92.682C287.502 89.659 285.486 93.1138 280.445 97.4324C278.285 99.3037 275.836 101.895 274.828 101.463C274.828 101.319 274.684 101.175 274.684 101.175C267.339 91.2425 267.339 91.2425 276.844 83.3252C277.421 82.8934 278.141 82.3176 278.717 81.8857C279.725 81.166 280.301 80.5902 279.437 79.2946C278.429 77.7112 276.988 77.4233 275.548 78.5749C272.092 81.4539 270.651 82.4615 267.195 85.9163C266.475 86.6361 265.754 87.2119 264.458 88.0756C264.026 88.3635 263.45 88.2195 263.306 87.7877C263.018 87.2119 262.73 86.6361 262.298 85.9163C260.714 83.4692 259.993 79.7265 256.105 82.3176C251.208 85.6284 245.879 89.3711 244.871 95.9929C244.151 99.0158 244.439 100.599 244.583 103.766C245.735 109.812 244.583 111.683 238.534 116.578C224.995 127.662 210.881 138.026 196.046 147.095C187.404 152.277 183.804 150.262 183.516 140.186C183.228 132.7 185.676 125.647 186.54 118.449C186.828 115.57 185.82 112.691 183.66 110.964C181.787 109.524 179.627 108.804 176.747 109.236C173.434 109.956 172.714 110.388 169.689 112.259C160.184 119.169 154.423 129.389 146.645 139.322C147.077 132.844 147.509 127.662 147.941 122.48C148.518 118.593 148.95 114.706 149.526 110.82C149.958 107.221 150.246 106.933 150.534 105.35C151.686 99.5916 154.279 95.7049 158.311 91.3864L158.743 90.8106C165.369 82.4615 173.722 70.3697 176.891 60.5811C178.619 55.6867 179.195 51.6561 176.891 46.33C175.738 44.1707 175.306 43.0191 174.01 42.1554C169.545 39.2764 165.369 38.8445 160.616 42.8752C159.752 43.451 159.463 44.0268 158.167 45.0344C153.126 50.5045 152.838 54.6791 150.678 59.8613C150.246 61.5887 149.094 66.9149 148.95 68.0665C148.518 70.3697 148.518 75.5519 146.789 82.3176C146.069 85.1966 146.213 85.7724 144.197 91.6743C144.053 92.1062 143.045 94.4094 142.18 94.9852C139.588 96.7126 137.428 97.2884 135.411 98.0082C132.387 99.1598 131.234 98.1521 131.667 94.6973C132.099 91.2425 131.955 87.6437 132.099 84.1889C131.811 79.4386 131.378 77.4233 129.938 73.2487C129.506 71.3773 128.93 70.0818 128.354 68.0665C128.354 67.9225 128.21 67.7786 128.21 67.7786C125.617 62.3085 124.033 57.846 120.721 52.6638C120.721 52.5198 119.28 50.5045 119.136 50.3606C116.112 45.7542 112.223 42.4433 110.495 41.2917C100.557 33.9502 89.899 32.3668 79.0971 38.8445C68.7272 45.1784 67.287 55.6867 69.0153 66.627C70.7436 78.143 76.5046 87.6437 85.8663 94.6973C88.3147 96.4247 93.6437 100.023 96.9563 101.607C103.149 104.486 108.478 105.781 116.112 106.933C116.256 106.933 116.4 106.933 116.4 107.077C119.136 107.941 121.729 107.221 120.865 111.252C111.935 133.42 96.0921 147.815 72.76 153.717C41.6504 161.634 14.5736 145.8 8.6685 116.866C2.90747 87.7877 17.5981 58.1339 44.3869 45.0344C51.1561 41.7236 58.2134 39.5643 65.7027 39.1324C68.2952 38.9885 70.7436 38.5566 70.5996 35.2458C70.3115 31.9349 67.7191 32.0789 65.2706 32.2228C63.9744 32.2228 62.5341 32.3668 61.2379 32.6547C31.4246 37.8369 11.549 54.823 3.33954 83.6131C-3.14162 106.501 -0.981228 128.67 16.878 146.375C33.873 163.362 55.0448 165.233 77.0807 159.187C98.9726 153.285 114.095 139.034 124.753 119.457C126.77 115.138 128.066 112.691 128.93 109.236C129.218 107.941 130.226 106.933 131.667 107.077C136.131 107.509 139.732 105.206 143.333 102.615C142.468 109.236 141.172 115.714 140.452 122.336C140.164 125.503 139.732 128.67 139.3 134.428C139.156 139.61 139.012 144.936 139.012 150.118C139.012 152.565 138.292 155.732 141.748 156.596C144.773 157.316 145.637 154.581 146.789 152.565C154.567 139.754 162.632 127.086 173.866 116.866C175.594 115.714 176.314 115.858 177.755 116.002C178.619 116.146 178.907 116.434 179.339 116.722C180.635 117.729 176.17 131.693 176.314 139.466C176.603 155.732 185.82 161.202 199.647 152.997C213.473 144.792 226.003 135.003 238.966 125.359C245.159 120.752 249.912 114.994 259.705 121.04C267.339 125.791 274.684 120.608 281.309 115.57C282.605 114.562 282.894 112.979 282.029 111.396C281.165 109.812 280.301 108.66 279.005 107.221C278.717 106.789 278.717 106.357 278.717 106.501C280.013 104.342 281.597 102.902 283.182 101.463C287.646 97.5763 291.967 95.1292 289.951 92.682ZM162.632 51.944C163.928 49.6408 165.801 46.33 168.537 47.1937C171.85 48.2013 171.418 51.944 170.841 54.823C168.969 63.8919 164.792 70.3697 160.04 78.143C159.175 79.1507 158.167 79.4386 157.303 79.0067C156.151 78.287 155.431 77.8551 155.431 74.9761C157.015 66.627 158.887 59.1416 162.632 51.944ZM113.807 98.584C113.663 98.584 113.519 98.584 113.519 98.584C111.791 98.1521 108.91 97.1444 108.478 97.0005H108.334C102.573 95.2731 100.557 93.9775 97.1003 92.3941C93.6437 90.2348 89.4669 87.3558 87.8827 85.6284C81.2575 77.7112 76.5046 69.2181 77.2248 58.4218C77.6568 51.2243 80.3933 46.0421 87.7386 44.1707C91.9154 42.5873 95.228 42.7312 99.8368 43.8828C101.421 44.3147 103.005 45.0344 104.302 46.186C109.775 50.6485 109.631 51.2243 111.791 54.5351C112.511 55.9746 113.807 58.2779 113.951 58.4218C117.84 65.1875 119.424 72.6729 122.017 79.8704C122.449 81.166 123.313 84.045 123.601 85.3405C123.601 85.6284 123.601 85.9163 123.601 86.2042C123.313 92.682 122.881 99.1598 113.807 98.584Z"
              fill="#383680"
            />
          </g>
        </svg>
      </ErrorComp>
    </AnimatedComponent>
  );
};

export default ErrorPageComp;