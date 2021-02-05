import styled from "styled-components";
export const SortAddonsBox = styled.div`
  display: flex;
  margin: 0 0 60px 0;
  position: relative;
  z-index: 1000;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  .sort-box {
    border: 1px solid #e3e3e3;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #383680;
    position: relative;
    margin: 0 0 0 15px;
    padding: 8px 45px 8px 20px;
  }

  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #61626a;
    white-space: nowrap;
  }

  .custom-select {
    width: 100%;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    color: #61626a;

    .row {
      padding: 0 20px;
      height: 45px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #fefefe;

      &:hover {
        background: #f2f3f9;
      }
    }

    .choosen {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #383680;
      background: #f2f3f9;
    }

    .row:last-of-type {
      border: none;
    }
  }

  .arrow {
    transform: ${({ isOpenSelect }) => isOpenSelect && "rotate(180deg)"};
    transition: 0.3s;
    position: absolute;
    right: 20px;
    top: 40%;
  }

  .type {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 5px);
  }
`;
