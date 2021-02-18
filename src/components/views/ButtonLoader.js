import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #979797;
  position: absolute;
  top: -1px;
  left: -1px;

  .sp-3balls,
  .sp-3balls:before,
  .sp-3balls:after {
    border-radius: 50%;
    background-color: #fff;
    width: 10px;
    height: 10px;
    transform-origin: center center;
    display: inline-block;
  }
  .sp-3balls {
    position: relative;
    background-color: #fff;
    opacity: 1;
    -webkit-animation: spScaleAlpha 1s infinite linear;
    animation: spScaleAlpha 1s infinite linear;
  }
  .sp-3balls:before,
  .sp-3balls:after {
    content: "";
    position: relative;
    opacity: 0.25;
  }
  .sp-3balls:before {
    left: 30px;
    top: -3px;
    -webkit-animation: spScaleAlphaBefore 1s infinite linear;
    animation: spScaleAlphaBefore 1s infinite linear;
  }
  .sp-3balls:after {
    left: -30px;
    top: -19px;
    -webkit-animation: spScaleAlphaAfter 1s infinite linear;
    animation: spScaleAlphaAfter 1s infinite linear;
  }

  @keyframes spScaleAlpha {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes spScaleAlphaBefore {
    0% {
      opacity: 0.25;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 0.25;
    }
  }

  @keyframes spScaleAlphaAfter {
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0.25;
    }
  }
`;

export const ButtonLoader = () => {
  return (
    <Loader>
      <div className="sp-3balls" />
    </Loader>
  );
};
