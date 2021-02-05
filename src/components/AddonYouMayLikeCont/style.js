import styled from "styled-components";

export const AddonsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${() =>
    `#383680  url(${require("../../assets/images/you-may-also-like.svg")}) no-repeat top center`};
  justify-content: center;
  align-items: center;
  padding: 0 0 6% 0;

  .addons-cont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .title {
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #fff;
    margin: 15% 0 20px 0;
  }

  .addon-card {
    margin: 30px;
    min-width: 360px;
    max-width: 360px;
  }

  .addonsCard .cardsButtons .downloadButton {
    margin: 0;
  }

  @media (max-width: 1000px) {
    .title {
      margin: 20% 0 20px 0;
    }
  }

  @media (max-width: 760px) {
    .title {
      margin: 30% 0 20px 0;
    }
  }
`;
