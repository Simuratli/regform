import React from "react";

import styled from "styled-components";

// LODASH

import range from "lodash/range";

const FakeRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 20px);
  height: calc(33rem - 20px);
  border: 10px solid #f2f3f9;
  border-radius: 3px;

  .rows-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: calc(100% - 50px);
    height: calc(100% - 30px);
    margin: 15px 25px;
  }

  .img {
    width: 120px;
    margin: 25px 25px 0 25px;
  }
`;

const FakeLine = styled.div`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}%`};
  border-radius: 5px;
  background: linear-gradient(-45deg, rgba(229, 229, 237, 1), rgba(235, 235, 241, 1), rgba(208, 206, 206, 1), rgba(229, 229, 237, 1));
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

`;

const FaceLine = ({ height = 10, width = "100%", style }) => {
  return <FakeLine style={style} height={height} width={width} />;
};

export const FakeCardRow = () => {
  return (
    <FakeRow>
      <img
        className="img"
        src={require("../../assets/images/image.svg")}
        alt="svg"
      />
      <div className="rows-container">
        <FaceLine height={20} style={{ margin: "30px 0 40px 0" }} />
        {range(0, 3, 1).map((r) => (
          <FaceLine key={r} height={20} style={{ margin: "15px 0 0 0" }} />
        ))}
      </div>

      <div className="rows-container">
        <FaceLine height={20} width={40} />
        <FaceLine height={40} style={{ margin: "15px 0" }} />
      </div>
    </FakeRow>
  );
};
